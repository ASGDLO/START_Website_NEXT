/** @jsx jsx */
import { jsx } from "theme-ui";
import { Container, Box, Heading, Text, Image, Button } from "theme-ui";

import ShapeLeft from "assets/shape-left.svg";
import ShapeRight from "assets/shape-right.png";

export default function Banner() {
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            NFT Fund Asset Management
          </Heading>
          <Text as="p" variant="heroSecondary">
            We've been thinking about a simpler and safer way to invest money in
            hedge funds. That's why we created a guaranteed NFT hedge fund. You
            can easily invest cryptocurrencies in hedge funds by purchasing
            NFTs.
          </Text>
          <Button
            onClick={() => {
              window.location.assign(
                "https://blockchain-fund-nft.vercel.app/",
                "_ blank"
              );
            }}
            className="donate__btn"
            variant="primary"
            aria-label="Get Started"
          >
            Explore
          </Button>
        </Box>

        <Box sx={styles.banner.imageBox}>
          {/* <Image src={BannerImg} alt="banner" /> */}
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    pt: ["120px", "145px", "155px", "170px", null, null, "10px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    zIndex: 2,
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: -10,
      left: 9,
      height: "101%",
      width: "70%",
      zIndex: -1,
      // backgroundImage: `url(${ShapeLeft})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom left",
      backgroundSize: "100%",
    },
    // "&::after": {
    //   position: "absolute",
    //   content: '""',
    //   bottom: "40px",
    //   right: 0,
    //   height: "100%",
    //   width: "10%",
    //   zIndex: -1,
    //   backgroundImage: `url(${ShapeRight})`,
    //   backgroundRepeat: `no-repeat`,
    //   backgroundPosition: "bottom right",
    //   backgroundSize: "1%",
    // },
    container: {
      minHeight: "inherit",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    contentBox: {
      width: ["100%", "90%", "535px", null, "57%", "60%", "68%", "60%"],
      mx: "auto",
      textAlign: "center",
      mb: ["40px", null, null, null, null, 7],
    },
    imageBox: {
      justifyContent: "center",
      textAlign: "center",
      display: "inline-flex",
      mb: [0, null, -6, null, null, "-40px", null, -3],
      img: {
        position: "relative",
        height: [245, "auto"],
      },
    },
  },
};
