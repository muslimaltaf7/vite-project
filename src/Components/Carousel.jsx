import React from 'react';
import CarouselComponent from './CarousalComponent';
 
const Carousel = () => {
    const baseImageUrl = "https://demandscience.com/wp-content/uploads/";
 
    const CarouselCarddata = [
        {
            'image': baseImageUrl + "2022/05/header-image_450x550_circleci-1.svg",
            'title': "PureSyndication and PureABM\naccelerate CircleCI sales cycle",
            'description': 'Uncovering Leads Within a Niche DevOps World "DemandScience has allowed us to expand our top of...'
        },
        {
            'image': baseImageUrl + "2022/05/header-image_450x550_mx_cs-1.svg",
            'title': "MX Technologies PureABM\nCase Study",
            'description': 'MX Partners with DemandScience to Generate Demand from Target Accounts "The team at DemandScience has set...'
        },
        {
            'image': baseImageUrl + "2022/05/header-image_450x550-–-unbranded-puresyn-1.svg",
            'title': "Guaranteed Lead Volume\nwith PureSyndication",
            'description': 'Improve Lead Quality to Augment the Marketing Pipeline to Reach Revenue Goals "DemandScience has made a...'
        },
        {
            'image': baseImageUrl + "2022/05/header-image_450x550_smg_cs-1.svg",
            'title': "Breaking into New Markets\nwith PureSyndication",
            'description':  'How SMG Broke into New Markets with Content Syndication "Given our niche industry, it is not....'
        },
        {
            'image': baseImageUrl + "2022/05/header-image_450x550_prolifiq-1.svg",
            'title': "Scalable Content Syndication\nfor Market Penetration",
            'description': 'Scalable Content Syndication for A Digital-first Market Penetration Initiative "DemandScience helped us accelerate and grow by...'
        },
        {
            'image': baseImageUrl + "2022/05/header-image_450x550-–-spanning-1.svg",
            'title': "Spanning PureSyndication\nwith Intent",
            'description': 'Spanning Launches Content Syndication with Intent and Doubles Scale of Demand Generation Program "DemandScience leads have...'
        },
        {
            'image': baseImageUrl + "2023/02/quit-genius-cs.jpg",
            'title': "How Quit Genius Generated\n$4 Million of Pipeline\nwith PureSyndication",
            'description':  "How Quit Genius Generated $4 Million of Pipeline with PureSyndication Quit Genius is the worlds first..."
        },
        {
            'image': baseImageUrl + "2023/02/mfg_cs.jpg",
            'title': "How Media Futures Group\nUnlocked New Markets\nwith PureSyndication",
            'description': 'How Media Futures Group Unlocked New Markets with PureSyndication "DemandScience has allowed us to expand our...'
        }
    ]
 
    // Combine titles, descriptions, and image paths into a single array of objects
    const slidesData = CarouselCarddata.map((data) => ({
        image: data.image,
        title: data.title,
        description: data.description,
        link: "#"
    }));
 
    return (
        <div>
            <CarouselComponent
                slidesData={slidesData}
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                responsiveSettings={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: false, // Disable arrows on small screens
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        },
                    },
                ]}
            />
        </div>
    );
};
 
export default Carousel;
 