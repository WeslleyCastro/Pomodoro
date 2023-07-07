import { HandPalm, Play } from "phosphor-react"
import { useForm, FormProvider} from "react-hook-form"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { 
  HomeContainer,
  StartContdownButton, 
  StopCountDownButton, 
} from "./styles"

import { NewCycleForm } from "./components/NewCycleForm"
import { Countdown } from "./components/Countdown"
import { useContext } from "react"
import { CyclesContext } from "../../contexts/CyclesContext"

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, "Informe a tarefa"),
  minutesAmount: zod
    .number()
    .min(5, "O ciclo previsa ser de no mínimo 5 minutos.")
    .max(60, "O ciclo precisa ser de no máximo 60 minutos."),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home(){
  const { createNewCycle, interrupetCurrentCycle, activeCycle } = 
  useContext(CyclesContext)

  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
    }
  })

  const { handleSubmit, watch, reset} = newCycleForm
  
  const handleCreateNewCycle = (data: NewCycleFormData) => {
    createNewCycle(data)
    reset()
  }

  const task = watch("task")

  return(
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} >
          <FormProvider {...newCycleForm}>
            <NewCycleForm/> 
          </FormProvider>
            <Countdown/>
          
          {activeCycle ? (
            <StopCountDownButton 
              onClick={interrupetCurrentCycle} 
              type="button">
              <HandPalm weight="fill" size={24}/> Interromper
            </StopCountDownButton>
          ) : (
            <StartContdownButton disabled={!task} type="submit" > 
              <Play weight="fill" size={24}/> Começar
            </StartContdownButton>
          )}
      </form>
    </HomeContainer>
  )
}