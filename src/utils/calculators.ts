export type BMIResult = {
  bmi: number;
  category: string;
  bgClass: string;
  textClass: string;
};

export function calculateBMI(weightKg: number, heightCm: number): BMIResult {
  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const rounded = Math.round(bmi * 10) / 10;

  if (bmi < 18.5) return { bmi: rounded, category: 'Underweight', bgClass: 'bg-primary-light/10', textClass: 'text-primary-light' };
  if (bmi < 25) return { bmi: rounded, category: 'Normal weight', bgClass: 'bg-secondary/10', textClass: 'text-secondary' };
  if (bmi < 30) return { bmi: rounded, category: 'Overweight', bgClass: 'bg-accent/10', textClass: 'text-accent' };
  return { bmi: rounded, category: 'Obese', bgClass: 'bg-red-500/10', textClass: 'text-red-500' };
}

export type CalorieResult = {
  bmr: number;
  maintenance: number;
  weightLoss: number;
  weightGain: number;
};

export function calculateCalories(
  weightKg: number,
  heightCm: number,
  age: number,
  gender: 'male' | 'female',
  activityLevel: number,
): CalorieResult {
  const bmr =
    gender === 'male'
      ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
      : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

  const maintenance = Math.round(bmr * activityLevel);
  return {
    bmr: Math.round(bmr),
    maintenance,
    weightLoss: maintenance - 500,
    weightGain: maintenance + 500,
  };
}

export function calculateWaterIntake(weightKg: number, activityMinutes: number): number {
  const base = weightKg * 0.033;
  const activityBonus = (activityMinutes / 30) * 0.35;
  return Math.round((base + activityBonus) * 10) / 10;
}
