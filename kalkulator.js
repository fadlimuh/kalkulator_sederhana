function hitung(operator) {
  const angka1 = parseInt(document.getElementById('angka1').value);
  const angka2 = parseInt(document.getElementById('angka2').value);
  let hasil;

  switch (operator) {
      case '+':
          hasil = angka1 + angka2;
          break;
      case '-':
          hasil = angka1 - angka2;
          break;
      case '*':
          hasil = angka1 * angka2;
          break;
  }

  document.getElementById('hasil').innerHTML = hasil;
}
