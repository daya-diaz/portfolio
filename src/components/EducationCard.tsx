import arrowRight from '../assets/arrowRight.svg'

interface EducationCardProps {
  title: string
  institute: string
  resume: string
  startAt: string
  finishedAt: string
  certificateUrl: string
}

export default function EducationCard(props: EducationCardProps) {
  return (
    <div className="flex flex-col gap-6 items-start">
      <div className="px-3 w-full flex flex-col gap-4">
        <div className="flex justify-center md:justify-between items-center">
          <span className="flex-1 text-lg text-white font-inter">
            <strong className="font-inter font-extrabold">
              {props.title} /
            </strong>{' '}
            {props.institute}
          </span>
          <span className="text-xs text-right text-gray-body uppercase font-inter">
            {props.startAt} - {props.finishedAt}
          </span>
        </div>
        <div className="flex flex-col gap-5">
          <p className="text-sm font-inter font-medium text-gray-body md:w-[706px] text-center md:text-left">
            {props.resume}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-end w-full">
        <a
          href={props.certificateUrl}
          target="_blank"
          className={`flex w-[200px] md:w-[22%] items-center md:text-xs justify-center px-3 py-2 bg-blue-500 rounded cursor-pointer font-medium text-center hover:bg-blue-800 transition ${props.certificateUrl === '' ? 'bg-transparent hover:bg-transparent cursor-default text-not-allowed w-[12%]' : ''}`}
          rel="noreferrer"
        >
          {`${props.certificateUrl ? 'Link do certificado' : 'Em breve'}`}
          <img
            className={`size-[18px] ${props.certificateUrl === '' ? 'hidden' : ''}`}
            src={arrowRight}
            alt=""
          />
        </a>
      </div>
    </div>
  )
}
