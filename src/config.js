const dev = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-6bgefdqha4ox"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1y3xz4r22e.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Rmjrf5w7e",
    APP_CLIENT_ID: "4otg89ovahd52uc562nkat6stj",
    IDENTITY_POOL_ID: "us-east-1:963c1461-3188-4e18-bc82-047070b27f94"
  }
};

const prod = {
  STRIPE_KEY: "pk_test_v1amvR35uoCNduJfkqGB8RLD",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-6bgefdqha4ox"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://1y3xz4r22e.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Rmjrf5w7e",
    APP_CLIENT_ID: "4otg89ovahd52uc562nkat6stj",
    IDENTITY_POOL_ID: "us-east-1:963c1461-3188-4e18-bc82-047070b27f94"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
