import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { GiWeightScale } from 'react-icons/gi';
import { calculateBMI } from '../../utils/calculators';
import Button from '../common/Button';
import CalculatorShell, { CalculatorField, CalculatorInput } from './CalculatorShell';

interface BMIForm {
  weight: number;
  height: number;
}

export default function BMICalculator({ className = '' }: { className?: string }) {
  const [result, setResult] = useState<ReturnType<typeof calculateBMI> | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<BMIForm>();

  return (
    <CalculatorShell
      icon={<GiWeightScale className="w-6 h-6" />}
      title="BMI Calculator"
      description="Calculate your Body Mass Index to understand your weight category."
      className={className}
    >
      <form
        onSubmit={handleSubmit((data) => setResult(calculateBMI(data.weight, data.height)))}
        className="flex-1 flex flex-col justify-between space-y-5"
        noValidate
      >
        <div className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CalculatorField label="Weight (kg)" error={errors.weight?.message}>
              <CalculatorInput
                type="number"
                step="0.1"
                placeholder="70"
                error={!!errors.weight}
                {...register('weight', {
                  required: 'Weight is required',
                  valueAsNumber: true,
                  min: { value: 20, message: 'Weight must be 20–300 kg' },
                  max: { value: 300, message: 'Weight must be 20–300 kg' },
                })}
              />
            </CalculatorField>
            <CalculatorField label="Height (cm)" error={errors.height?.message}>
              <CalculatorInput
                type="number"
                placeholder="170"
                error={!!errors.height}
                {...register('height', {
                  required: 'Height is required',
                  valueAsNumber: true,
                  min: { value: 100, message: 'Height must be 100–250 cm' },
                  max: { value: 250, message: 'Height must be 100–250 cm' },
                })}
              />
            </CalculatorField>
          </div>
        </div>
        <div className="space-y-4 mt-auto">
          <Button type="submit" variant="primary" fullWidth>
            Calculate BMI
          </Button>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-5 rounded-xl text-center ${result.bgClass}`}
            >
              <p className={`text-3xl font-bold mb-1 ${result.textClass}`}>{result.bmi}</p>
              <p className="font-semibold text-dark text-sm">{result.category}</p>
            </motion.div>
          )}
        </div>
      </form>
    </CalculatorShell>
  );
}
