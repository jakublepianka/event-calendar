import { useLocation } from "react-router";
import { Link } from "react-router";

export function EventDetails(){
  const location = useLocation();
  const match = location.state.event;
  return (
    <>
    <Link to={`/?date=${match.dateVenue.slice(0,7)}`}>Back to calendar</Link>
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        maxWidth: "500px",
      }}
    >
      <h2>
        {match.homeTeam?.name || "TBD"} vs {match.awayTeam?.name || "TBD"}
      </h2>

      <p>
        <strong>Date:</strong> {match.dateVenue}{" "}
        <strong>Time (UTC):</strong> {match.timeVenueUTC}
      </p>

      <p>
        <strong>Status:</strong> {match.status} |{" "}
        <strong>Competition:</strong> {match.originCompetitionName}
      </p>

      <p>
        <strong>Stage:</strong> {match.stage?.name || "N/A"}
      </p>

      <p>
        <strong>Result:</strong>{" "}
        {match.result
          ? `${match.result.homeGoals} - ${match.result.awayGoals} ${
              match.result.winner ? `(Winner: ${match.result.winner})` : ""
            }`
          : "Not available"}
      </p>

      <p>
        <strong>Home Team:</strong>{" "}
        {match.homeTeam
          ? `${match.homeTeam.officialName} (${match.homeTeam.abbreviation})`
          : "N/A"}
      </p>

      <p>
        <strong>Away Team:</strong>{" "}
        {match.awayTeam
          ? `${match.awayTeam.officialName} (${match.awayTeam.abbreviation})`
          : "N/A"}
      </p>

      {match.stadium && (
        <p>
          <strong>Stadium:</strong> {match.stadium}
        </p>
      )}
    </div>
    </>
  );
}