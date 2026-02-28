function isSameType(value1, value2) {

  // Check if both are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // If one is NaN and other is not
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }

  // Compare types normally
  return typeof value1 === typeof value2;
}