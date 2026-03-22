import { Link } from "react-router";
import styles from "./CalendarDay.module.css";

export function CalendarDay({ dayNum, events }) {
  return (
    <div className={styles.calendarDay}>
      <div className={styles.dayNum}>{dayNum}</div>
      <div>
        {events.length > 0 && (
          <ul className={styles.eventList}>
            {events.map((event, eventIndex) => {
              const homeTeamAbbrev = event.homeTeam
                ? event.homeTeam.abbreviation
                : "N/A";
              const awayTeamAbbrev = event.awayTeam
                ? event.awayTeam.abbreviation
                : "N/A";

              return (
                <li className={styles.eventItem} key={eventIndex}>
                  <Link
                    aria-label="See event details"
                    className={styles.detailsLink}
                    to={`/details/${event.dateVenue.slice(2)}-${event.timeVenueUTC.slice(0, 5)}-${eventIndex}`}
                    state={{ event }}
                  >
                    <p>
                      {homeTeamAbbrev} vs {awayTeamAbbrev}
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
