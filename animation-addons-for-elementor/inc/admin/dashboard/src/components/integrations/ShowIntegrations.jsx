import IntegrationCard from "../shared/IntegrationCard";

const ShowIntegrations = () => {
  const allIntegration = WCF_ADDONS_ADMIN.addons_config.integrations;

  return (
    <div>
      {Object.keys(allIntegration)?.map((plugins) => (
        <div className="bg-background-secondary p-3 rounded-lg">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-1 mt-1">
            {Object.keys(allIntegration[plugins].elements)?.map(
              (content, i) => (
                <React.Fragment key={`plugin_content-${i}`}>
                  <IntegrationCard
                    item={allIntegration[plugins].elements[content]}
                  />
                </React.Fragment>
              )
            )}
            {Array.from({
              length:
                2 -
                (Object.keys(allIntegration[plugins].elements)?.length % 2 === 0
                  ? 2
                  : Object.keys(allIntegration[plugins].elements)?.length % 2),
            }).map((_, index) => (
              <React.Fragment key={`plugin_content_empty-${index}`}>
                <IntegrationCard />
              </React.Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowIntegrations;
