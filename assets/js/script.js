const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const weightInput = document.getElementById('weight');
  const heightInput = document.getElementById('height');

  let weight = parseFloat(weightInput.value.replace(',', '.'));
  let height = parseFloat(heightInput.value.replace(',', '.'));

  if (Number.isNaN(weight) || Number.isNaN(height) || weight <= 0 || height <= 0) {
    alert('Por favor, insira valores numéricos e positivos para peso e altura');
    return;
  }

  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
  const value = document.getElementById('value');
  let description = '';

  value.classList.add('attention');
  document.getElementById('infos').classList.remove('hidden');

  if (bmi < 18.5) {
    description = 'Cuidado! Você está abaixo do peso';
  } else if (bmi >= 18.5 && bmi <= 25) {
    description = 'Você está no peso ideal!';
    value.classList.remove('attention');
    value.classList.add('normal');
  } else if (bmi > 25 && bmi <= 30) {
    description = 'Você está com sobrepeso!';
  } else if (bmi > 30 && bmi <= 35) {
    description = 'Cuidado! Você está com obesidade moderada!';
  } else {
    description = 'Muito cuidado! Você está com obesidade mórbida!';
  }

  value.textContent = bmi.replace('.', ',');
  document.getElementById('description').textContent = description;
});

