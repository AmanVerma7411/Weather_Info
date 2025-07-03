import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1545134969-8debd725b007?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const HOT_URL="https://media.istockphoto.com/id/1332108668/photo/heatwave-with-warm-thermometer-and-fire-global-warming-and-extreme-climate-environment.webp?a=1&b=1&s=612x612&w=0&k=20&c=TD95uCJmBIrWzvqYSoG5v1bb0gbaUXof4RN8xWop_qg=";
    const RAIN_URL="https://images.unsplash.com/photo-1542308716-0d8306ad1c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbmklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    return (
          <div className="InfoBox">
            <div className="cardcontainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        
        sx={{ height: 140 }}
        image={info.humidity>80 ? RAIN_URL:(info.temp>15) ? HOT_URL:COLD_URL}
        title="green iguana"
      />
    <CardContent>
  <Typography gutterBottom variant="h5" component="div">
    {info.city} {info.humidity>80 ? <ThunderstormIcon/>:(info.temp>15) ? <SunnyIcon/>:<AcUnitIcon/>}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Temperature: {info.temp}°C
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Humidity: {info.humidity}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Min Temp: {info.tempMin}°C
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Max Temp: {info.tempMax}°C
  </Typography>
  <Typography variant="body2" color="text.secondary">
    Feels Like: {info.feelslike}
  </Typography>
  <Typography variant="body2" color="text.secondary">
    The weather can be described as {info.weather}.
  </Typography>
</CardContent>

      </Card>
      </div>
    </div>
    );

}