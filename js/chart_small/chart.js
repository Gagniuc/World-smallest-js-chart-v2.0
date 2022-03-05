function Chart(q,c,e) {
    var s = q.split(",");
    var mx = Math.max.apply(null, s);
    var mn = Math.min.apply(null, s);
    var canvas = document.getElementById('bio');
    var w = canvas.width;
    var h = canvas.height;
    
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        if(e=='y'){ctx.clearRect(0, 0, w, h);}
        ctx.moveTo(0, 0);
        ctx.beginPath();
	var d = ((w-80)/s.length);
		
        for (var i=0; i<=s.length-1; i++){
            var y = h - 15 - (((h-15) / (mx-mn)) * (s[i]-mn));
            var x = d * i;
            ctx.lineTo(x, y+1);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = c;
        ctx.stroke();
    }
}
