import { describe, it, expect } from 'vitest';
import { calculateBMI, calculateCalories, calculateWaterIntake } from '../calculators';

describe('calculateBMI', () => {
  it('returns Underweight for BMI < 18.5', () => {
    const result = calculateBMI(50, 180);
    expect(result.bmi).toBeLessThan(18.5);
    expect(result.category).toBe('Underweight');
    expect(result.bgClass).toBe('bg-primary-light/10');
    expect(result.textClass).toBe('text-primary-light');
  });

  it('returns Normal weight for BMI between 18.5 and 24.9', () => {
    const result = calculateBMI(70, 175);
    expect(result.bmi).toBeGreaterThanOrEqual(18.5);
    expect(result.bmi).toBeLessThan(25);
    expect(result.category).toBe('Normal weight');
    expect(result.bgClass).toBe('bg-secondary/10');
    expect(result.textClass).toBe('text-secondary');
  });

  it('returns Overweight for BMI between 25 and 29.9', () => {
    const result = calculateBMI(85, 175);
    expect(result.bmi).toBeGreaterThanOrEqual(25);
    expect(result.bmi).toBeLessThan(30);
    expect(result.category).toBe('Overweight');
    expect(result.bgClass).toBe('bg-accent/10');
    expect(result.textClass).toBe('text-accent');
  });

  it('returns Obese for BMI >= 30', () => {
    const result = calculateBMI(110, 175);
    expect(result.bmi).toBeGreaterThanOrEqual(30);
    expect(result.category).toBe('Obese');
    expect(result.bgClass).toBe('bg-red-500/10');
    expect(result.textClass).toBe('text-red-500');
  });

  it('rounds BMI to one decimal place', () => {
    const result = calculateBMI(70, 175);
    const decimalPart = result.bmi.toString().split('.')[1];
    expect(!decimalPart || decimalPart.length <= 1).toBe(true);
  });

  it('calculates BMI correctly: weight / height^2', () => {
    const result = calculateBMI(80, 200);
    // 80 / (2 * 2) = 20
    expect(result.bmi).toBe(20);
    expect(result.category).toBe('Normal weight');
  });
});

describe('calculateCalories', () => {
  it('calculates BMR for males using Mifflin-St Jeor formula', () => {
    // Male: 10 * 80 + 6.25 * 180 - 5 * 30 + 5 = 800 + 1125 - 150 + 5 = 1780
    const result = calculateCalories(80, 180, 30, 'male', 1.2);
    expect(result.bmr).toBe(1780);
  });

  it('calculates BMR for females using Mifflin-St Jeor formula', () => {
    // Female: 10 * 60 + 6.25 * 165 - 5 * 25 - 161 = 600 + 1031.25 - 125 - 161 = 1345.25 -> 1345
    const result = calculateCalories(60, 165, 25, 'female', 1.2);
    expect(result.bmr).toBe(1345);
  });

  it('calculates maintenance calories by multiplying BMR by activity level', () => {
    const result = calculateCalories(80, 180, 30, 'male', 1.55);
    expect(result.maintenance).toBe(Math.round(1780 * 1.55));
  });

  it('sets weight loss to maintenance - 500', () => {
    const result = calculateCalories(80, 180, 30, 'male', 1.2);
    expect(result.weightLoss).toBe(result.maintenance - 500);
  });

  it('sets weight gain to maintenance + 500', () => {
    const result = calculateCalories(80, 180, 30, 'male', 1.2);
    expect(result.weightGain).toBe(result.maintenance + 500);
  });

  it('returns higher BMR for males vs females with same stats', () => {
    const male = calculateCalories(70, 170, 30, 'male', 1.2);
    const female = calculateCalories(70, 170, 30, 'female', 1.2);
    expect(male.bmr).toBeGreaterThan(female.bmr);
  });

  it('returns lower BMR for older individuals', () => {
    const young = calculateCalories(70, 170, 25, 'male', 1.2);
    const old = calculateCalories(70, 170, 55, 'male', 1.2);
    expect(young.bmr).toBeGreaterThan(old.bmr);
  });

  it('scales maintenance with activity level', () => {
    const sedentary = calculateCalories(70, 170, 30, 'male', 1.2);
    const active = calculateCalories(70, 170, 30, 'male', 1.725);
    expect(active.maintenance).toBeGreaterThan(sedentary.maintenance);
  });
});

describe('calculateWaterIntake', () => {
  it('calculates base water intake as weight * 0.033', () => {
    const result = calculateWaterIntake(70, 0);
    expect(result).toBe(Math.round(70 * 0.033 * 10) / 10);
  });

  it('adds activity bonus for exercise minutes', () => {
    const noActivity = calculateWaterIntake(70, 0);
    const withActivity = calculateWaterIntake(70, 60);
    expect(withActivity).toBeGreaterThan(noActivity);
  });

  it('calculates activity bonus correctly: (minutes/30) * 0.35', () => {
    const result = calculateWaterIntake(70, 60);
    const expected = Math.round((70 * 0.033 + (60 / 30) * 0.35) * 10) / 10;
    expect(result).toBe(expected);
  });

  it('rounds to one decimal place', () => {
    const result = calculateWaterIntake(73, 45);
    const decimalPart = result.toString().split('.')[1];
    expect(!decimalPart || decimalPart.length <= 1).toBe(true);
  });

  it('returns higher intake for heavier individuals', () => {
    const light = calculateWaterIntake(50, 30);
    const heavy = calculateWaterIntake(100, 30);
    expect(heavy).toBeGreaterThan(light);
  });
});
