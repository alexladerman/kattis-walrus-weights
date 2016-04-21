var values = [];

var input_lines = 0;

input_lines = parseInt(readline());

while (input_lines > 0) {
	values.push(parseInt(readline()));
	input_lines--;
}

var results = new Array(2001);

results[0] = true;

function iterate() {
	for (var i = 0; i < values.length; i++) {
		var currentValue = values[i];

		var top = 2001 - currentValue;

		for (var j = top; j >= 0; j--) {
			if (results[j]) {
				results[j + currentValue] = true;
			}
		}
	}
}

iterate();

for (var i = 0; i < results.length; i++) {
	if (results[1000 + i]) {
		print(1000 + i);
		break;
	}
	else if (results[1000 - i]) {
		print(1000 - i);
		break;
	}
}