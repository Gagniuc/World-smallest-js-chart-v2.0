# World-smallest-chart-v2.0

# World smallest chart (lower bound to upper bound)

For a better visualization, the implementation of the chart narrows
the y-axis and shows only the region between the two values. To obtain this relative reduction, the minimum similarity score value was taken into account. Thus,
the following change was made to the Chart function:

![screenshot](https://github.com/Gagniuc/World-smallest-chart/blob/main/img/ylu.png?raw=true)

where mn is the minimum value and mx is the maximum value found in the list of
similarity scores, h is the canvas height, and si is the current value of the similarity
index. Note that the inner workings of the Chart function were fully described for
the previous implementations (see Additional algorithm 15.2). This concludes the
changes related to the Chart function.

