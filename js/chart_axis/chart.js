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
		
        for (var i=0; i<=s.length-1; i++)
        {
            var y = h - 15 - (((h-15) / (mx-mn)) * (s[i]-mn));
            var x = d * i;
            
            ctx.lineTo(x, y+1);
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = c;
        ctx.stroke();
		
		if(s.length>=2 && s.length<=(w-80) && e=='y'){

			ctx.closePath();
			ctx.beginPath();
			//horisontal divisions
			ctx.strokeStyle = '#454545';
			
			//distance between divisions must be visible
			if((w/s.length)>=5){
				for (var i=0; i<s.length; i++)
				{
					ctx.moveTo(Math.floor(d*i), h-10);
					ctx.lineTo(Math.floor(d*i), h);
				}
				ctx.stroke();
			}
			
			//bottom line
			ctx.moveTo(0, h-1);
			ctx.lineTo(w-80, h-1);
			ctx.stroke();
			
			//left vertical line
			ctx.moveTo((w-80), 0);
			ctx.lineTo((w-80), h);
			ctx.stroke();

			//top axis
			ctx.moveTo((w-80), 1);
			ctx.lineTo((w-50), 1);
			ctx.stroke();

			//top left vertical line
			ctx.moveTo((w-55), 0);
			ctx.lineTo((w-55), 14);
			ctx.stroke();

			//bottom axis
			ctx.moveTo((w-80), h-15);
			ctx.lineTo((w-70), h-15);
			ctx.stroke();

			//vertical divisions
			for (var i=0; i<10; i++)
			{
				ctx.moveTo(w-80, ((h-15)/10)*i);
				ctx.lineTo(w-70, ((h-15)/10)*i);
			}
			ctx.stroke();

			//MAX value on chart
			text = mx;
			dim = ctx.measureText(text).width
			ctx.save();
			ctx.translate((w-80)+18,18);
			ctx.rotate(Math.PI / 2);
			ctx.font = "18px Arial";
			ctx.fillStyle = "#000000";
			ctx.textAlign = "left";
			ctx.fillText(text, 0, 0);
			ctx.restore();

			//MAX text
			text = 'MAX';
			dim = ctx.measureText(text).width
			ctx.save();
			ctx.translate((w-65)+20,14);
			ctx.font = "18px Arial";
			ctx.fillStyle = "#000000";
			ctx.textAlign = "left";
			ctx.fillText(text, 0, 0);
			ctx.restore();

			text = mn;
			dim = ctx.measureText(text).width
			ctx.save();
			ctx.translate((w-80)+20,h-10);
			ctx.font = "18px Arial";
			ctx.fillStyle = "#000000";
			ctx.textAlign = "left";
			ctx.fillText(text, 0, 0);
			ctx.restore();
		}	
    }
}