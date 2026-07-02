import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaFire } from 'react-icons/fa';
import { calculateCalories } from '../../utils/calculators';
import Button from '../common/Button';
import CalculatorShell, { CalculatorField, CalculatorInput, CalculatorSelect } from './CalculatorShell';

interface CalorieForm {
  weight: number;
  height: number;
  age: number;
  gender: 'male' | 'female';
  activity: string;
}

const activityLevels = [
  { value: '1.2', label: 'Sedentary' },
  { value: '1.375', label: 'Light (1-3 days/week)' },
  { value: '1.55', label: 'Moderate (3-5 days/week)' },
  { value: '1.725', label: 'Active (6-7 days/week)' },
  { value: '1.9', label: 'Very Active' },
];

const numberRules = {
  weight: {
    required: 'Weight is required',
    valueAsNumber: true,
    min: { value: 20, message: 'Weight must be 20–300 kg' },
    max: { value: 300, message: 'Weight must be 20–300 kg' },
  },
  height: {
    required: 'Height is required',
    valueAsNumber: true,
    min: { value: 100, message: 'Height must be 100–250 cm' },
    max: { value: 250, message: 'Height must be 100–250 cm' },
  },
  age: {
    required: 'Age is required',
    valueAsNumber: true,
    min: { value: 10, message: 'Age must be 10–120' },
    max: { value: 120, message: 'Age must be 10–120' },
  },
} as const;

export default function CalorieCalculator({ className = '' }: { className?: string }) {
  const [result, setResult] = useState<ReturnType<typeof calculateCalories> | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<CalorieForm>({
    defaultValues: { gender: 'male', activity: '1.55' },
  });

  return (
    <CalculatorShell
      icon={<FaFire className="w-5 h-5" />}
      title="Daily Calorie Calculator"
      description="Estimate your daily calorie needs based on your profile."
      className={className}
    >
      <form
        onSubmit={handleSubmit((data) => {
          setResult(
            calculateCalories(data.weight, data.height, data.age, data.gender, parseFloat(data.activity)),
          );
        })}
        className="flex-1 flex flex-col justify-between space-y-5"
        noValidate
      >
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorField label="Weight (kg)" error={errors.weight?.message}>
              <CalculatorInput
                type="number"
                step="0.1"
                placeholder="70"
                error={!!errors.weight}
                {...register('weight', numberRules.weight)}
              />
            </CalculatorField>
            <CalculatorField label="Height (cm)" error={errors.height?.message}>
              <CalculatorInput
                type="number"
                placeholder="170"
                error={!!errors.height}
                {...register('height', numberRules.height)}
              />
            </CalculatorField>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorField label="Age" error={errors.age?.message}>
              <CalculatorInput
                type="number"
                placeholder="30"
                error={!!errors.age}
                {...register('age', numberRules.age)}
              />
            </CalculatorField>
            <CalculatorField label="Gender">
              <CalculatorSelect {...register('gender', { required: true })}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </CalculatorSelect>
            </CalculatorField>
          </div>
          <CalculatorField label="Activity Level">
            <CalculatorSelect {...register('activity', { required: true })}>
              {activityLevels.map((level) => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </CalculatorSelect>
          </CalculatorField>
        </div>
        <div className="space-y-4 mt-auto">
          <Button type="submit" variant="primary" fullWidth>
            Calculate Calories
          </Button>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { label: 'BMR', value: result.bmr },
                { label: 'Maintenance', value: result.maintenance },
                { label: 'Weight Loss', value: result.weightLoss },
                { label: 'Weight Gain', value: result.weightGain },
              ].map((item) => (
                <div key={item.label} className="p-3 rounded-xl bg-primary/5 text-center border border-primary/10">
                  <p className="text-xl font-bold text-primary">{item.value}</p>
                  <p className="text-xs text-muted mt-0.5">{item.label}</p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </form>
    </CalculatorShell>
  );
}
