export default async function handler(req, res) {
  if (req.method !== 'GET') {
    req.status(405).json('Method not allowed')
  }
  const xml2js = require('xml2js');

  const fetchPodcastsFromRSS = async () => {
    try {
      const response = await fetch('https://kitdesai-podcasts.s3.us-east-1.amazonaws.com/podcast.rss');
      const rssText = await response.text();
      const parser = new xml2js.Parser();
      const result = await parser.parseStringPromise(rssText);

      const podcasts = result.rss.channel[0].item.map(item => ({
        title: item.title[0],
        description: item.description[0],
        url: item.enclosure[0]['$'].url,
        pubDate: item.pubDate[0],
        guid: item.guid[0],
      }));

      return podcasts;
    } catch (error) {
      console.error('Error fetching or parsing RSS feed:', error);
      return [];
    }
  };

  const podcasts = await fetchPodcastsFromRSS();

  res.status(200).json({podcasts})
}
