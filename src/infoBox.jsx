import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1499346030926-9a72daac6c63?auto=format&fit=crop&w=800&q=60";
  return (
    <div className="infoBox">
      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 400,
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-5px)",
              boxShadow: "0 12px 32px rgba(0, 0, 0, 0.2)",
            },
            background: "#fff",
          }}
        >
          <CardMedia
            sx={{ height: 200 }}
            image={INIT_URL}
            title="weather image"
          />
          <CardContent sx={{ padding: "24px" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              align="center"
              sx={{ fontWeight: 700 }}
            >
              {info.city}
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ marginBottom: "6px" }}
            >
              Temperature = <strong>{info.temp}°C</strong>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ marginBottom: "6px" }}
            >
              Humidity = <strong>{info.humidity}</strong>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ marginBottom: "6px" }}
            >
              Min Temp = <strong>{info.tempMin}°C</strong>
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              align="center"
              sx={{ marginBottom: "6px" }}
            >
              Max Temp = <strong>{info.tempMax}°C</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              The weather can be described as <i>{info.weather}</i> and feels
              like <strong>{info.feelsLike}°C</strong>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
