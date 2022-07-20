function teste(x, y, z) {
  if (x == null && y == null && z == null) {
    return false;
  } 

  if (x == null && y == null && z != null)  {
    return z;
  } else if (x == null && z == null && y != null) {
    return y;
  } else if (y == null && z == null && x != null) {
    return x;
  }

  if (x == null) {
    return y + z;
  } else if (y == null) {
    return x + z;
  } else if (z == null) {
    return x + y;
  }

  if (x != null && y != null && z != null) {
    return (x + y) / z;
  }

else {
    return null;
  }
}

console.log(teste());
