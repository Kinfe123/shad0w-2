import styles from '../components/buttons-shiny/get-started-btn.module.css'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
const GetStartedBtn = () => {
  return (
    <div className='flex items-center justify-center pr-4'>
      <Button className={cn(styles.btnio , 'font-heading2 ml-[-100px] ')}>
        Go
        <div className={cn(styles.icon , 'bg-transparent')}>
          <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path
              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </Button>
    </div>
  )
}

export default GetStartedBtn
