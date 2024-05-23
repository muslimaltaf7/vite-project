import React from "react";

const CardsHome = () => {
  const products = [
    {
      href: "/products/pure-syndication",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/content-syndication-1.svg",
      title: "PureSyndication",
      description: "Use the content you have to get the leads that you want.",
    },
    {
      href: "/products/pure-push",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/03/pure-push.svg",
      title: "PurePush",
      description:
        "Connect with highly-qualified leads who are closer to purchase.",
    },
    {
      href: "/products/abm-display",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/abm-display-advertising-1.svg",
      title: "ABM Display",
      description:
        "Get the right ads to in-market buyers at your dream accounts.",
    },
    {
      href: "/products/account-intelligence",
      imgSrc:
        "https://demandscience.com/wp-content/uploads/2023/02/prospect-data-1.svg",
      title: "Account Intelligence",
      description:
        "Transform your marketing with precision insights and targeting.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="container mx-auto p-4">
        <div className="text-center">
          <h2
            className="text-xl font-semibold"
            id="h-optimized-roi-unrivaled-results-demand-generation-solutions-that-deliver"
          >
            Optimized ROI, Unrivaled Results. Demand Generation Solutions that
            Deliver.
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => {
          // For the fourth card, span it across the middle column
          if (index === 3) {
            return (
              <div
                key={index}
                className="col-span-3 sm:col-span-1 sm:col-start-2 p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <a
                  href={product.href}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={product.imgSrc}
                    alt={product.title}
                    className="w-1/3 mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    See How
                    <img
                      src="https://demandscience.com/wp-content/plugins/demand-science-custom-blocks/product-suite-list-item/build/images/cta-action-image.c2285773.png"
                      alt="Call to Action Icon"
                      className="ml-2"
                      width="24px"
                      height="auto"
                    />
                  </button>
                </a>
              </div>
            );
          }
          return (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <a
                href={product.href}
                className="flex flex-col items-center text-center"
              >
                <img
                  src={product.imgSrc}
                  alt={product.title}
                  className="w-1/3 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  See How
                  <img
                    src="https://demandscience.com/wp-content/plugins/demand-science-custom-blocks/product-suite-list-item/build/images/cta-action-image.c2285773.png"
                    alt="Call to Action Icon"
                    className="ml-2"
                    width="24px"
                    height="auto"
                  />
                </button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardsHome;
