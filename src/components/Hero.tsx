import dayanePic from '../assets/dayaneImg.png'
import { Button } from './Button'

export function Hero() {
  return (
    <section className="mx-4  md:py-4">
      <div className="flex flex-col items-center justify-center font-poppins gap-5">
        <img className="w-60 h-60" src={dayanePic} alt="" />
        <div className="flex flex-col items-center  md:gap-3">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-white tracking-tighter font-bold">
            Dayane Santos
          </h1>
          <span className="text-lg md:text-2xl text-gray-100">
            Software Developer 💻
          </span>
        </div>
        <p className="md:max-w-[587px] mb-4 text-gray-50 text-center font-medium text-sm md:text-base">
          Software Developer apaixonada com foco no desenvolvimento ReactJS,
          dedicada à criação de websites elegantes e fáceis de usar.
        </p>
        <Button size="big" textButton="Entre em contato" type="secondary" />
      </div>
    </section>
  )
}
