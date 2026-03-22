export function CalendarDay({ dayNum, events }) {
  return (
    <>
      <div>{dayNum}</div>
      {events.length > 0 && (
        <ul>
          {events.map((event, eventIndex) => {
            const homeTeamAbbrev = event.homeTeam
              ? event.homeTeam.abbreviation
              : "N/A";
            const awayTeamAbbrev = event.awayTeam
              ? event.awayTeam.abbreviation
              : "N/A";

            return (
              <li key={eventIndex}>
                <p>{event.originCompetitionName}</p>
                <p>
                  {homeTeamAbbrev} vs {awayTeamAbbrev}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
