import { useLocation } from "react-router";
import { Link } from "react-router";
import styles from "./EventDetails.module.css";

export function EventDetails() {
  const location = useLocation();
  const match = location.state.event;
  return (
    <>
      <header>
        <nav className={styles.detailsNav}>
          <Link
            to={`/?date=${match.dateVenue.slice(0, 7)}`}
            className={styles.backLink}
          >
            <div className={styles.linkFiller}>Back to Calendar</div>
          </Link>
        </nav>
      </header>
      <div className={styles.details}>
        <article className={styles.matchCard}>
          <header className={styles.competitionHeader}>
            <h2>{match.originCompetitionName}</h2>
          </header>
          <section className={styles.scoreBoard}>
            <div className={styles.homeTeam}>
              <p>{match.homeTeam ? `${match.homeTeam.officialName}` : "N/A"}</p>
              <p className={styles.teamAbbr}>
                <span>{match.homeTeam?.abbreviation || "N/A"}</span>
              </p>
            </div>
            <div className={styles.matchStatus}>
              <p className={styles.score}>
                {match.result
                  ? `${match.result.homeGoals} - ${match.result.awayGoals}`
                  : "0 - 0"}
              </p>
              <p className={styles.date}>{match.dateVenue}</p>
            </div>
            <div className={styles.awayTeam}>
              <p>{match.awayTeam ? `${match.awayTeam.officialName}` : "N/A"}</p>
              <p className={styles.teamAbbr}>
                <span>{match.awayTeam?.abbreviation || "N/A"}</span>
              </p>
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
