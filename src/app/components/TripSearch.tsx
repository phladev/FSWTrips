"use client";

import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import React from "react";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date | null;
  budget: string;
}

const TripSearch = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TripSearchForm>();

  const router = useRouter();

  const onSubmit = (data: TripSearchForm) => {
    router.push(
      `/trips/search?text=${
        data.text
      }&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`
    );
  };

  return (
    <div className="mx-auto p-5 bg-search-background bg-cover bg-center bg-no-repeat lg:bg-contain lg:bg-gray-100 lg:h-[450px] lg:py-32">
      <h1 className="font-semibold text-xl text-primaryDarker text-center lg:text-[2.5rem]">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5 lg:flex-row lg:max-w-[948px] lg:mx-auto lg:min-w-[144px] lg:bg-primary lg:bg-opacity-20 lg:p-5 lg:rounded-lg lg:mt-8">
        <Input
          error={!!errors.text}
          errorMessage={errors.text?.message}
          placeholder="Onde você quer ir?"
          {...register("text", {
            required: { value: true, message: "Local de destino obrigatório!" },
          })}
        />

        <div className="flex gap-4 flex-none">
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                placeholderText="Data de Início"
                onChange={field.onChange}
                selected={field.value}
                minDate={new Date()}
                className="w-full"
              />
            )}
          />
          <Controller
            name="budget"
            control={control}
            render={({ field }) => (
              <CurrencyInput
                placeholder="Orçamento"
                allowDecimals={false}
                onValueChange={field.onChange as any}
                value={field.value}
                onBlur={field.onBlur}
              />
            )}
          />
        </div>

        <Button
          variant={"primary"}
          onClick={() => handleSubmit(onSubmit)()}
          className="lg:w-[450px]"
        >
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default TripSearch;
