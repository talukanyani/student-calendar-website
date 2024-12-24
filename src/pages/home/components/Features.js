import styles from './Features.module.css'
import app_home_screen_img from '../../../assets/images/app_home_screen.png'

export default function Features() {
    return (
        <div id='features' className={styles.features}>
            <div>
                <img
                    src={app_home_screen_img}
                    alt='Student Calendar app home screen'
                />
            </div>
            <div>
                <h2 className='small_heading'>Features</h2>
                <h3>Your Ultimate Productivity Tool</h3>
                <p>
                    Student Calendar simplifies the process of organising,
                    tracking, and prioritising academic tasks.
                </p>
                <ul>
                    <li>
                        Seamlessly integrate your assessments, plans,
                        and other academic tasks in one place.
                    </li>
                    <li>
                        Get reminders for your assessments and plans.
                        Stay prepared.
                    </li>
                    <li>
                        Visualise your schedule in a tables, countdowns,
                        list, and calendar views.
                        Stay ahead of your schedule.
                    </li>
                </ul>
            </div>
        </div >
    );
}
