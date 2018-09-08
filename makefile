all:
	make clean;
	make test;

test:
	$$(npm bin)/nightwatch --env chrome_headless;

test2:
	npm run test;

test_h:
	$$(npm bin)/nightwatch --env chrome_headless;

test_sample:
	$$(npm bin)/nightwatch --env chrome ./tests/site/test1.js

clean:
	rm -rf ./reports;
