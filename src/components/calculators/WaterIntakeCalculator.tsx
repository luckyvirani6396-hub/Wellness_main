import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaTint } from 'react-icons/fa';
import { calculateWaterIntake } from '../../utils/calculators';
import Button from '../common/Button';
import CalculatorShell, { CalculatorField, CalculatorInput } from './CalculatorShell';

interface WaterForm {
  weight: number;
  activity: number;
}

export default function WaterIntakeCalculator({ className = '' }: { className?: string }) {
  const [result, setResult] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<WaterForm>();

  return (
    <CalculatorShell
      icon={<FaTint className="w-5 h-5" />}
      title="Water Intake Calculator"
      description="Find out how much water you should drink daily."
      className={className}
    >
      <form
        onSubmit={handleSubmit((data) => setResult(calculateWaterIntake(data.weight, data.activity)))}
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
                  min: { value: 10, message: 'Weight must be 10–300 kg' },
                  max: { value: 300, message: 'Weight must be 10–300 kg' },
                })}
              />
            </CalculatorField>
            <CalculatorField label="Activity (min/day)" error={errors.activity?.message}>
              <CalculatorInput
                type="number"
                placeholder="30"
                error={!!errors.activity}
                {...register('activity', {
                  required: 'Activity is required',
                  valueAsNumber: true,
                  min: { value: 0, message: 'Enter 0–300 minutes' },
                  max: { value: 300, message: 'Enter 0–300 minutes' },
                })}
              />
            </CalculatorField>
          </div>
        </div>
        <div className="space-y-4 mt-auto">
          <Button type="submit" variant="primary" fullWidth>
            Calculate Water Intake
          </Button>
          {result !== null && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 rounded-xl bg-secondary/10 text-center border border-secondary/20"
            >
              <p className="text-3xl font-bold text-secondary mb-1">{result}L</p>
              <p className="text-muted text-sm">Recommended daily intake</p>
              <p className="text-xs text-muted mt-1.5">~{Math.round(result * 4)} glasses (250ml)</p>
            </motion.div>
          )}
        </div>
      </form>
    </CalculatorShell>
  );
}
