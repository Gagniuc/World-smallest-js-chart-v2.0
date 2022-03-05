# World-smallest-chart-v2.0

# World smallest chart (lower bound to upper bound)

For a better visualization, the implementation of the chart narrows
the y-axis and shows only the region between the two values. To obtain this relative reduction, the minimum similarity score value was taken into account. Thus,
the following change was made to the Chart function:


![screenshot](https://github.com/Gagniuc/World-smallest-js-chart-v2.0/blob/main/img/chart.png?raw=true)

Live: https://gagniuc.github.io/World-smallest-js-chart-v2.0/

<img src="https://github.com/Gagniuc/World-smallest-js-chart-v2.0/blob/main/img/x.png?raw=true" height="100">

<img src="https://github.com/Gagniuc/World-smallest-js-chart-v2.0/blob/main/img/ylu.png?raw=true" height="100">

where mn is the minimum value and mx is the maximum value found in the list of
similarity scores, h is the canvas height, and si is the current value of the similarity
index. Note that the inner workings of the Chart function were fully described for
the previous implementations (see Additional algorithm 15.2). This concludes the
changes related to the Chart function.

