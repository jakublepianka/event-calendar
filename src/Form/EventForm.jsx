import { useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router";

export function EventForm() {
  const { setEvents } = useOutletContext();
  const navigate = useNavigate();
  const [match, setMatch] = useState({
    season: new Date().getFullYear(),
    status: "scheduled",
    timeVenueUTC: "",
    dateVenue: "",
    stadium: "",
    homeTeam: {
      name: "",
      officialName: "",
      slug: "",
      abbreviation: "",
      teamCountryCode: "",
      stagePosition: null,
    },
    awayTeam: {
      name: "",
      officialName: "",
      slug: "",
      abbreviation: "",
      teamCountryCode: "",
      stagePosition: null,
    },
    stage: {
      id: "",
      name: "",
      ordering: 0,
    },
    group: null,
    originCompetitionId: "",
    originCompetitionName: "",
  });

  const handleChange = (e, path) => {
    const value = e.target.value;
    if (path.includes(".")) {
      const [parent, child] = path.split(".");
      setMatch((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
    } else {
      setMatch((prev) => ({ ...prev, [path]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents((prev) => [...prev, match]);
    navigate(`/?date=${match.dateVenue.slice(0,7)}`);
  };

  return (
    <>
      <Link to="/">Back to Calendar</Link>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px" }}>
        <h2>Add New Match</h2>

        <label>
          Season:
          <input
            type="number"
            value={match.season}
            onChange={(e) => handleChange(e, "season")}
          />
        </label>

        <label>
          Status:
          <input
            type="text"
            value={match.status}
            onChange={(e) => handleChange(e, "status")}
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            value={match.dateVenue}
            onChange={(e) => handleChange(e, "dateVenue")}
            required
          />
        </label>

        <label>
          Time (UTC):
          <input
            type="time"
            value={match.timeVenueUTC}
            onChange={(e) => handleChange(e, "timeVenueUTC")}
          />
        </label>

        <label>
          Stadium:
          <input
            type="text"
            value={match.stadium || ""}
            onChange={(e) => handleChange(e, "stadium")}
          />
        </label>
        <fieldset>
          <legend>Home Team</legend>
          <label>
            Name:
            <input
              type="text"
              value={match.homeTeam.name}
              onChange={(e) => handleChange(e, "homeTeam.name")}
            />
          </label>
          <label>
            Official Name:
            <input
              type="text"
              value={match.homeTeam.officialName}
              onChange={(e) => handleChange(e, "homeTeam.officialName")}
            />
          </label>
          <label>
            Abbreviation:
            <input
              type="text"
              value={match.homeTeam.abbreviation}
              onChange={(e) => handleChange(e, "homeTeam.abbreviation")}
            />
          </label>
          <label>
            Country Code:
            <input
              type="text"
              value={match.homeTeam.teamCountryCode}
              onChange={(e) => handleChange(e, "homeTeam.teamCountryCode")}
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Away Team</legend>
          <label>
            Name:
            <input
              type="text"
              value={match.awayTeam.name}
              onChange={(e) => handleChange(e, "awayTeam.name")}
            />
          </label>
          <label>
            Official Name:
            <input
              type="text"
              value={match.awayTeam.officialName}
              onChange={(e) => handleChange(e, "awayTeam.officialName")}
            />
          </label>
          <label>
            Abbreviation:
            <input
              type="text"
              value={match.awayTeam.abbreviation}
              onChange={(e) => handleChange(e, "awayTeam.abbreviation")}
            />
          </label>
          <label>
            Country Code:
            <input
              type="text"
              value={match.awayTeam.teamCountryCode}
              onChange={(e) => handleChange(e, "awayTeam.teamCountryCode")}
            />
          </label>
        </fieldset>
        <h3>Stage</h3>
        <label>
          ID:
          <input
            type="text"
            value={match.stage.id}
            onChange={(e) => handleChange(e, "stage.id")}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            value={match.stage.name}
            onChange={(e) => handleChange(e, "stage.name")}
          />
        </label>
        <label>
          Ordering:
          <input
            type="number"
            value={match.stage.ordering}
            onChange={(e) => handleChange(e, "stage.ordering")}
          />
        </label>

        <label>
          Competition ID:
          <input
            type="text"
            value={match.originCompetitionId}
            onChange={(e) => handleChange(e, "originCompetitionId")}
          />
        </label>

        <label>
          Competition Name:
          <input
            type="text"
            value={match.originCompetitionName}
            onChange={(e) => handleChange(e, "originCompetitionName")}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
