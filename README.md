# World smallest chart 2.0 in native JS

<kbd>Version 2.0</kbd> of this compact chart takes into account both positive and negative values from an input. Previously in [chart version 1.0](https://github.com/Gagniuc/World-smallest-js-chart-v1.0), only values from zero to <i>n</i> have been considered, where <i>n</i> was a positive value. Thus, chart 2.0 takes into account a lower bound as well as an upper bound. The lower bound represents the lowest value whereas the upper bound represents the highest value over the input. The projects in this repository show two js charts and both use the HTML5 canvas object. The first one from file <kbd>chart_small.html</kbd> contains the shortest chart source code. Basically the implementation is represented by a function named <kbd>Chart</kbd> that draws some consecutive numeric values on a canvas object. The second chart found in file <kbd>chart_axis.html</kbd> contains an addition to the first, namely it draws the <kbd>x-axis</kbd> and <kbd>y-axis</kbd>, and the corresponding baseline ticks. There are also two implementations in the <kbd>js</kbd> folder that store the Chart function in a separate <kbd>".js"</kbd> file. For more detailed information, note that these native Charts in Javascript, were published in the supplementary materials of the book entitled <i>Algorithms in Bioinformatics: Theory and Implementation</i>.

The screenshot below shows the output of chart 2.0. This output contains three different signals, each with a different color (red, black, blue):

![screenshot](https://github.com/Gagniuc/World-smallest-js-chart-v2.0/blob/main/img/chart.png?raw=true)

Live: https://gagniuc.github.io/World-smallest-js-chart-v2.0/

How does it work? The Chart function contains a loop that makes a number of iterations (<i>i</i>) equal to the number of terms present in the number sequence (<i>s</i>). Inside the main loop, the coordinates above the canvas object are calculated based on the maximum value, namely according to the value found in the <i>mx</i> variable. Thus, the y-axis is represented by the height (<i>h</i>) of the canvas object divided by the value in the <i>mx</i> variable (<i>h</i>/<i>mx</i>), and the result is multiplied by the current value in the number sequence (s[<i>i</i>]). To position the zero values at the bottom of the chart, the <kbd>y-axis</kbd> is reversed by subtracting the result (the <i>y</i> value) from the height (<i>h</i>) of the canvas object:

<img src="https://github.com/Gagniuc/World-smallest-js-chart-v2.0/blob/main/img/x.png?raw=true" height="100">

In contrast, the <kbd>x-axis</kbd> is calculated by dividing the length of the canvas object by the total number of terms in the sequence of numbers (<b>w/s.length</b>), and the
result is multiplied by the iteration number (<i>i</i>):

For a better visualization, the implementation of this chart narrows the <kbd>y-axis</kbd> and shows only the region between the two values. To obtain this relative reduction, the minimum similarity score value was taken into account. Thus, the following change was made to the Chart function:

<img src="https://github.com/Gagniuc/World-smallest-js-chart-v2.0/blob/main/img/ylu.png?raw=true" height="100">

Where <i>mn</i> is the minimum value and <i>mx</i> is the maximum value found over the signal (consecutive numeric values spaced by delimiters), <i>h</i> is the canvas height, and s[<i>i</i>] is the current value from the signal. Note that the inner workings of the Chart function were fully described for the [previous implementations](https://github.com/Gagniuc/World-smallest-js-chart-v1.0). This concludes the changes related to the Chart function.

```
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
```

The lines below show how this <kbd>Chart</kbd> function from above can be called:

```

var A = "0,2.62,5.23,7.82,10.4,12.94,15.45,17.92,20.34,22.7,25,27.23,29.39,31.47,33.46,35.36,37.16,38.86,40.45,41.93,43.3,44.55,45.68,46.68,47.55,48.3,48.91,49.38,49.73,49.93,50,49.93,49.73,49.38,48.91,48.3,47.55,46.68,45.68,44.55,43.3,41.93,40.45,38.86,37.16,35.36,33.46,31.47,29.39,27.23,25,22.7,20.34,17.92,15.45,12.94,10.4,7.82,5.23,2.62,0,-2.62,-5.23,-7.82,-10.4,-12.94,-15.45,-17.92,-20.34,-22.7,-25,-27.23,-29.39,-31.47,-33.46,-35.36,-37.16,-38.86,-40.45,-41.93,-43.3,-44.55,-45.68,-46.68,-47.55,-48.3,-48.91,-49.38,-49.73,-49.93,-50,-49.93,-49.73,-49.38,-48.91,-48.3,-47.55,-46.68,-45.68,-44.55,-43.3,-41.93,-40.45,-38.86,-37.16,-35.36,-33.46,-31.47,-29.39,-27.23,-25,-22.7,-20.34,-17.92,-15.45,-12.94,-10.4,-7.82,-5.23,-2.62,0";
var B = "1,-0.99,0.96,-0.91,0.84,-0.76,0.66,-0.55,0.42,-0.29,0.15,-0.01,-0.13,0.27,-0.4,0.53,-0.64,0.74,-0.83,0.9,-0.95,0.99,-1,0.99,-0.97,0.92,-0.86,0.78,-0.68,0.57,-0.45,0.32,-0.18,0.04,0.1,-0.24,0.38,-0.5,0.62,-0.72,0.81,-0.89,0.94,-0.98,1,-1,0.97,-0.93,0.87,-0.79,0.7,-0.59,0.47,-0.34,0.21,-0.07,-0.08,0.22,-0.35,0.48,-0.6,0.71,-0.8,0.88,-0.93,0.98,-1,1,-0.98,0.94,-0.88,0.81,-0.72,0.61,-0.49,0.37,-0.23,0.09,0.05,-0.19,0.33,-0.46,0.58,-0.69,0.78,-0.86,0.93,-0.97,0.99,-1,0.98,-0.95,0.9,-0.82,0.74,-0.63,0.52,-0.39,0.26,-0.12,-0.02,0.16,-0.3,0.43,-0.56,0.67,-0.77,0.85,-0.91,0.96,-0.99,1,-0.99,0.96,-0.91,0.84,-0.75,0.65,-0.54,0.42,-0.28";
var C = "0,-0.14,-0.29,-0.45,-0.64,-0.86,-1.14,-1.53,-2.13,-3.27,-6.41,-75.31,7.75,3.61,2.29,1.62,1.2,0.9,0.67,0.48,0.32,0.17,0.03,-0.12,-0.26,-0.42,-0.6,-0.81,-1.08,-1.44,-2,-2.99,-5.45,-25.09,9.79,4.03,2.47,1.72,1.27,0.95,0.71,0.52,0.35,0.2,0.05,-0.09,-0.23,-0.39,-0.56,-0.77,-1.02,-1.36,-1.87,-2.74,-4.74,-15.04,13.27,4.54,2.67,1.83,1.34";


Chart(A, '#ff0000', 'y');
Chart(B, '#0055ff', 'n');
Chart(C, '#000000', 'n');
```

# References

<i>Paul A. Gagniuc. Algorithms in Bioinformatics: Theory and Implementation. John Wiley & Sons, Hoboken, NJ, USA, 2021, ISBN: 9781119697961.</i>

