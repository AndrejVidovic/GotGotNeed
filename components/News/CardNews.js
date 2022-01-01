import {
  Typography,
  useTheme,
  IconButton,
  Card,
  Box,
  CardMedia,
  CardContent,
  CardHeader,
  Avatar,
  Chip,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
const styles = (theme) => ({
  newsCard: {
    display: "flex",
    FlexDirection: "row",
    height: "25vh",
    marginTop: "3vh",
  },
  cardDescription: {
    fontWeight: 400,
    fontSize: "1.5vh",
  },
  cardContent: {
    marginTop: "1vh",
    textAlign: "justify",
    paddingTop: "8px",
  },
  cardMedia: {
    width: "25vh",
    height: "auto",
  },
  cardBox: {
    margin: "3vh",
    marginTop: "2vh",
  },
});
function CardNews(props) {
  const blog = props.blog;
  const theme = useTheme();
  return (
    <Card sx={styles(theme).newsCard}>
      <CardMedia
        src="/BlogImage.png"
        alt="BlogImage"
        component="img"
        sx={styles(theme).cardMedia}
      />
      <Box sx={styles(theme).cardBox}>
        <CardHeader
          avatar={<Avatar aria-label="Author">R</Avatar>}
          action={
            <IconButton>
              <ShareIcon></ShareIcon>
            </IconButton>
          }
          title={blog.title}
          subheader={blog.date}
        />
        <CardContent sx={styles(theme).cardContent}>
          <Typography sx={styles(theme).cardDescription}>
            {blog.description}
          </Typography>
          {blog.type.map((data) => (
            <Chip label={data}></Chip>
          ))}
        </CardContent>
      </Box>
    </Card>
  );
}
export default CardNews;
