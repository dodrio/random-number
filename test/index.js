import test from 'ava';
import randomNumber from '../src';

function loopRun(fn, time = 100000) {
  for (let i = 0; i < time; i++) {
    fn();
  }
}

function isInteger(n) {
  return n % 1 === 0;
}

function isFloat(n) {
  return n % 1 !== 0;
}

test('max', t => {
  const result = [];
  loopRun(() => {
    result.push(randomNumber({ max: 10 }));
  });

  t.true(result.every(i => i >= 0 && i < 10 && isInteger(i)));
});

test('min | max', t => {
  const result = [];
  loopRun(() => {
    result.push(randomNumber({ min: 1, max: 10 }));
  });

  t.true(result.every(i => i >= 1 && i < 10 && isInteger(i)));
});

test('min | max | float', t => {
  const result = [];
  loopRun(() => {
    result.push(randomNumber({ min: 1, max: 10, float: true }));
  });

  t.true(result.every(i => i >= 1 && i < 10 && isFloat(i)));
});

test('min | max | float | includeMax', t => {
  const result = [];
  loopRun(() => {
    result.push(
      randomNumber({ min: 1, max: 10, float: true, incluedMax: true })
    );
  });

  t.true(result.every(i => i >= 1 && i <= 10 && isFloat(i)));
});
