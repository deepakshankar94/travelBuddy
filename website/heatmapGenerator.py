import numpy

lngAdd = 0.00079099999

latAdd = 0.00051299999;

latArray = [26.953610,
26.953668,
26.953140,
26.953068,];


lngArray = [75.846455,
75.845876,
75.845801,
75.846402];

latArray.sort()
lngArray.sort()

lngAdd = lngArray[2] - lngArray[1]
latAdd = latArray[2] - latArray[1]

lat= latArray[1]
lng = lngArray[1]


for x in range(1,100):
	newLat  = numpy.random.normal(latAdd/2,latAdd/4) + lat
	newLong  = numpy.random.normal(lngAdd/2,lngAdd/4) + lng


	print(f"new google.maps.LatLng({newLat},{newLong}),")
