/** @jsx jsx */
import { jsx, Container, Box, Flex } from "theme-ui";
import { keyframes } from "@emotion/core";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import PriceCard from "components/price-card";
import ButtonGroup from "components/button-group";
import SectionHeader from "components/section-header";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";

const packages = {
  Monthly: [
    {
      id: 1,
      name: "Long / Short",
      description:
        "We are managing asset on the Binance future exchnage with Long short strategies",
      buttonText: "Buy NfT",
      priceWithUnit: "SALE",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "total net assets: 100K$",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Binance Exchange market ",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "Market directional strategies",
          isAvailable: true,
        },
        // {
        //   id: 4,
        //   icon: <IoIosCloseCircle />,
        //   text: "eCommerce Store ",
        //   isAvailable: true,
        // },
      ],
    },
    {
      id: 2,
      name: "Quantitative trading ",
      description: "we have profitable quantitative algorithms",
      priceWithUnit: "SALE",
      buttonText: "Buy NFT      ",
      anotherOption: "",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "103% profit for 3 month.",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Backtesting Verification",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "7 year experience",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "5 million trading volumea",
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: "Automative Trading System",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "Automative Trading System",
      description: "computer manage our fund",
      priceWithUnit: "SALE",
      buttonText: "Buy NFT",
      anotherOption: "",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Automatically trading assets",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "Binance API",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "24 hour trading",
          isAvailable: true,
        },
        {
          id: 4,
          icon: <IoIosCheckmarkCircle />,
          text: "risk management",
          isAvailable: true,
        },
      ],
    },
  ],
  annual: [
    {
      id: 1,
      name: "NFT Listing",
      description: "you can listing your NFT on the marketplace",
      buttonText: "SELL NFT ",
      priceWithUnit: "SALE",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "easy to listing",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "fast bid list",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "on the website",
          isAvailable: true,
        },
        // {
        //   id: 4,
        //   icon: <IoIosCloseCircle />,
        //   text: "eCommerce Store ",
        //   isAvailable: true,
        // },
      ],
    },
    {
      id: 2,
      name: " Bid Robot ",
      description:
        "The robot will continue to automatically make purchases at the specified fund price along with the charged profit.",
      priceWithUnit: "SALE",
      buttonText: "SELL NFT",
      anotherOption: "",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "guaranteed Sale",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "NFT price = based on your fund profit",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "automated bid system",
          isAvailable: true,
        },
        // {
        //   id: 4,
        //   icon: <IoIosCheckmarkCircle />,
        //   text: "Drag & Drop Builder ",
        //   isAvailable: true,
        // },
      ],
    },
    {
      id: 3,
      header: "Suggested",
      headerIcon: <IoIosCheckmarkCircle />,
      name: "based on Stablecoin",
      description:
        "when  you purchasing nft, we evaluate the asset based on the usdt value of Ethereum, and defend against a decline in value with a long-short strategy.",
      priceWithUnit: "SALE",
      buttonText: "SELL NFT",
      anotherOption: "",
      points: [
        {
          id: 1,
          icon: <IoIosCheckmarkCircle />,
          text: "Based on USDT",
          isAvailable: true,
        },
        {
          id: 2,
          icon: <IoIosCheckmarkCircle />,
          text: "hedging down side",
          isAvailable: true,
        },
        {
          id: 3,
          icon: <IoIosCheckmarkCircle />,
          text: "also profitable when bear market",
          isAvailable: true,
        },
        // {
        //   id: 4,
        //   icon: <IoIosCheckmarkCircle />,
        //   text: "Drag & Drop Builder ",
        //   isAvailable: true,
        // },
      ],
    },
  ],
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    draggable: false,
  },
  tablet: {
    breakpoint: { max: 1523, min: 640 },
    items: 2,
    draggable: true,
  },
  mobile: {
    breakpoint: { max: 1500, min: 200 },
    items: 1,
    draggable: true,
  },
};

export default function Package() {
  const { Monthly, annual } = packages;
  const [state, setState] = useState({
    active: "Monthly",
    pricingPlan: Monthly,
  });

  const handlePricingPlan = (plan) => {
    if (plan === "annual") {
      setState({ active: "annual", pricingPlan: annual });
    } else {
      setState({ active: "Monthly", pricingPlan: Monthly });
    }
  };

  const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: "",
    slidesToSlide: 1,
    items: 3,
    containerClass: "carousel-container",
    customButtonGroup: <ButtonGroup />,
    dotListClass: "",
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: "",
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: "",
  };

  return (
    <section id="pricing" sx={{ variant: "section.pricing" }}>
      <Container>
        <SectionHeader slogan="details" title="Information" />

        <Flex sx={styles.buttonGroup}>
          <Box sx={styles.buttonGroupInner}>
            <button
              className={state.active === "Monthly" ? "active" : ""}
              type="button"
              aria-label="Monthly"
              onClick={() => handlePricingPlan("Monthly")}
            >
              How to Manage
            </button>
            <button
              className={state.active === "annual" ? "active" : ""}
              type="button"
              aria-label="Annual"
              onClick={() => handlePricingPlan("annual")}
            >
              How to Redeem
            </button>
          </Box>
        </Flex>
        <Box sx={styles.pricingWrapper} className="pricing__wrapper">
          <Carousel {...sliderParams}>
            {state.pricingPlan.map((packageData) => (
              <Box sx={styles.pricingItem} key={packageData.id}>
                <PriceCard data={packageData} />
              </Box>
            ))}
          </Carousel>
        </Box>
      </Container>
    </section>
  );
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
		transform: translateY(0);
    opacity: 1;
  }
`;
const styles = {
  pricingWrapper: {
    mb: "-40px",
    mt: "-40px",
    mx: -3,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    "&.pricing__wrapper .package__card": {
      ".package__header": {
        animation: `${fadeIn} 0.8s ease-in`,
      },
      "ul > li": {
        animation: `${fadeIn2} 0.7s ease-in`,
      },
      ".package__price": {
        animation: `${fadeIn2} 0.9s ease-in`,
      },
      button: {
        animation: `${fadeIn2} 1s ease-in`,
      },
    },
    ".carousel-container": {
      width: "100%",
      "> ul > li ": {
        display: "flex",
      },
    },
    ".button__group": {
      display: ["flex", null, null, null, "none"],
      mb: [4, null, null, null, 0],
    },
  },
  pricingItem: {
    mx: 3,
    display: "flex",
    flexShrink: 0,
    flex: "1 1 auto",
  },
  buttonGroup: {
    justifyContent: "center",
    mb: "7",
    mt: ["-15px", "-35px"],
    position: "relative",
    zIndex: 2,
  },
  buttonGroupInner: {
    display: "flex",
    padding: "7px",
    margin: "0 auto",
    borderRadius: "5px",
    backgroundColor: "#F7F8FB",
    button: {
      border: 0,
      padding: ["15px 20px", "15px 27px"],
      borderRadius: "5px",
      color: "text",
      fontSize: [1, 2],
      lineHeight: 1.2,
      fontWeight: 500,
      backgroundColor: "transparent",
      cursor: "pointer",
      fontFamily: "body",
      letterSpacing: "-0.24px",
      transition: "all 0.3s",
      "&.active": {
        color: "#0f2137",
        backgroundColor: "#ffffff",
        boxShadow: "0 3px 4px rgba(38, 78, 118, 0.1)",
      },
      "&:focus": {
        outline: 0,
      },
    },
  },
};
