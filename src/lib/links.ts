const REPO = "https://github.com/aritzmmartinez/quoin";

export const links = {
  repo: REPO,
  changelog: `${REPO}/blob/main/CHANGELOG.md`,
  newIssue: `${REPO}/issues/new`,
  dockerGuide: `${REPO}#with-docker`,
  dockerHub: "https://hub.docker.com/r/aritzmmartinez/quoin",
  contact: "mailto:quoin@aritzmmartinez.dev",
} as const;

export const DOCKER_RUN = `docker run -d --name quoin \
  -p 127.0.0.1:3000:3000 \
  -v quoin-data:/app/data \
  --restart unless-stopped \
  aritzmmartinez/quoin:latest`;

// Google Group that grants access to the Android closed beta. While it is
// null the Beta section is not rendered and the Hero, Download and FAQ say
// the beta is coming soon; set the URL to switch them all to "open".
export const BETA_GROUP: string | null = null;
