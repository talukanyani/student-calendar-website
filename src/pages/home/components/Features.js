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
                <h2 className='small_heading'>Efficient App</h2>
                <h3>
                    Developed to revolutionise the way students
                    manage their academic assessments.
                </h3>
                <p>
                    Student Calendar simplifies the process of organising,
                    tracking, and prioritising academic tasks.
                </p>
                <ul>
                    <li>
                        Seamlessly integrate your tests, project due dates,
                        and other academic assessments in one place.
                    </li>
                    <li>
                        Share your academic schedule with your class mates.
                    </li>
                    <li>
                        Visualise your academic schedule in table,
                        list and calendar views.
                    </li>
                </ul>
            </div>
        </div >
    );
}
