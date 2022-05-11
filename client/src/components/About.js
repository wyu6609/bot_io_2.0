import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import SvgIcon from "@mui/material/SvgIcon";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./About.css";
const About = () => {
  let seed = Math.floor(Math.random() * 1000) + 1;
  let seed1 = Math.floor(Math.random() * 1000) + 1;
  let seed2 = Math.floor(Math.random() * 1000) + 1;
  let seed3 = Math.floor(Math.random() * 1000) + 1;

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <ThemeProvider>
        <Container component="main" maxWidth="sm" sx={{ mt: 10, mb: 4 }}>
          <Paper
            variant="outlined"
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            className="form-container"
          >
            <Typography
              align="center"
              component="h1"
              variant="h4"
              gutterBottom
              sx={{ color: "#1265f0" }}
            >
              bot_io:
            </Typography>

            <Typography variant="h5" gutterBottom align="center">
              a fictional market place
            </Typography>

            <Typography
              sx={{ color: "#1265f0" }}
              variant="subtitle1"
              align="center"
            >
              built with
            </Typography>

            <Typography
              gutterBottom
              sx={{ color: "#1265f0" }}
              variant="subtitle1"
              align="center"
            >
              <span>
                <svg
                  target="_blank"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
                </svg>
              </span>
              +
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  role="img"
                  viewBox="0 0 24 24"
                  height="3em"
                  width="3em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.8848485 15.8107143v1.1635714h1.9818182c.4060606 0 1.1030303-.315 1.1272727-1.19571427v-.45c0-.75214286-.5818182-1.1957143-1.1272727-1.1957143h-.9878788v-.54h1.9575757v-1.17h-1.8787878c-.4848485 0-1.1333334.42428573-1.1333334 1.215v.405c0 .7907143.6424243 1.1957143 1.1333334 1.1957143 1.3636363.00642857-.3272728 0 .9333333 0v.56571428l-2.0060606.0064286zm-10.6181818-.28285716s1.060606-.09642857 1.060606-1.5492857c0-1.45285715-1.2848485-1.58785715-1.2848485-1.58785715H7.72727273v4.5835714H8.8909091v-1.1057143l1.0060606 1.1057142h1.7212121l-1.3515151-1.4464286zm-.44848488-.93857143H8.8909091v-1.0478571h.93333332s.26060608.1028572.26060608.5207143c0 .4178572-.26666668.5271429-.26666668.5271429zM14.2 12.4228572h-1.1818182c-.8424242 0-1.1272727.81-1.1272727 1.1957143v3.35571427h1.1818182v-.8035714h1.1090909v.8035714h1.1454545V13.6185715c0-.97714286-.8363636-1.1957143-1.1272727-1.1957143zm-.0181818 2.44928572h-1.1151515V13.76s0-.2507143.3696969-.2507143h.4060606c.3272728 0 .3333334.2507143.3333334.2507143v1.11214286h.0060606zm1.6848485-2.44928573h1.230303v4.5514285h-1.230303v-4.5514285zm2.9575757 3.375v-3.375H17.6v4.5514285h2.8787879v-1.1764285h-1.6545455zM.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76363636.16714284-3.93333333 1.87071427-5.2060606 4.12071427-1.27272726 2.25-1.45454546 4.1528571-1.45454546 4.1528571zM.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76363636.16714284-3.93333333 1.87071427-5.2060606 4.12071427-1.27272726 2.25-1.45454546 4.1528571-1.45454546 4.1528571zM.42424242 16.9742857h4.7878788S4.2969697 12.545 7.3272727 10.75142858c.66060607-.34071428 2.76363638-1.61357143 6.20606058 1.08642857.1090909-.09642857.2121212-.17357143.2121212-.17357143s-3.1515151-3.33642856-6.66060602-2.9635714c-1.76969696.16714284-3.93939393 1.87071427-5.2121212 4.12071427C.6 15.0714285.4242424 16.9742857.4242424 16.9742857zM10.4 9.0607143L10.4242424 8.63c-.0545454-.03214286-.2060606-.1092857-.58787876-.225l-.02424243.4242857c.2.0707143.3939394.14785716.5878788.2314286zM9.82424242 10.42357143l-.02424242.405c.2.00642857.4.03214286.6.07714286l.0242424-.3985715c-.2060606-.045-.4060606-.0707143-.59999998-.0835715zm-2.24242424-2.0057143h.06060606l-.12121212-.39214284c-.1878788 0-.38181818.0128571-.58181818.0385714l.1151515.3792857c.1757576-.0192857.35151517-.0257143.52727274-.0257143zm.2909091 2.3657143l.13939393.44357143c.1757576-.09.3515152-.16714286.5272728-.225l-.1333333-.42428572c-.2060606.06428572-.3818182.135-.5333333.2057143zM5.1212121 9.09285713l-.27272727-.44357142c-.15151515.0835715-.3090909.1735715-.47272727.2764286l.27878787.45c.15757576-.1028571.3090909-.1992857.46666667-.2828571zm1.24242424 2.89285716l.2909091.4628571c.1030303-.1607143.22424242-.3085715.35757575-.4564286L6.7393939 11.555c-.13939394.135-.26666667.28285714-.37575758.4307143zm-.87878788 2.07l.4909091.4114285C6 14.2164285 6.04242424 13.9657143 6.1030303 13.715l-.43636363-.36642857c-.07878788.23785714-.13333334.47571428-.1818182.70714286zM2.830303 11.0021428L2.4 10.60357142c-.15757576.1607143-.3090909.32142858-.44848485.48214287L2.41818182 11.51c.12727273-.17357143.26666666-.34714286.4121212-.50785714zM1 13.8757143l-.6969697-.27c-.1151515.27642856-.24242424.59785713-.3030303.77142856l.6969697.27C.77575758 14.42857143.9030303 14.11357143 1 13.8757143zm4.3939394 1.81285713c.0121212.34071428.04242424.61714286.07272727.81L6.1939394 16.775c-.05454546-.2507143-.10909092-.53357143-.14545455-.8357143l-.65454546-.25071427z"></path>
                </svg>
              </span>
              +
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="32"
                  viewBox="0 0 36 32"
                  fill="none"
                  class="css-1170n61"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
                    fill="#007FFF"
                  ></path>
                </svg>
              </span>
            </Typography>

            <Typography variant="subtitle1" align="center">
              bot and avatar svgs from
              <span className="about-bottom">
                <Avatar
                  src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`}
                />
                <Avatar
                  className="avatar"
                  src={`https://avatars.dicebear.com/api/bottts/${seed1}.svg`}
                />

                <Button
                  width="small"
                  href="https://avatars.dicebear.com/docs"
                  variant="contained"
                  target="_blank"
                  className="dicebear"
                >
                  DiceBear
                </Button>
                <Avatar
                  className="avatar"
                  src={`https://avatars.dicebear.com/api/pixel-art/${seed2}.svg`}
                />
                <Avatar
                  src={`https://avatars.dicebear.com/api/pixel-art/${seed3}.svg`}
                />
              </span>
            </Typography>
          </Paper>
        </Container>
      </ThemeProvider>
    </Grid>
  );
};

export default About;
