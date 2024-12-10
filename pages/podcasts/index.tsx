import React from 'react';

interface Podcast {
  title: string;
  description: string;
  url: string;
}

const Podcasts: React.FC = () => {
  const [podcasts, setPodcasts] = React.useState<Podcast[]>([]);

  React.useEffect(() => {
    fetch('/api/podcasts')
      .then(response => response.json())
      .then(data => setPodcasts(data.podcasts))
      .catch(error => console.error('Error fetching podcasts:', error));
  }, []);

  return (
    <div style={{padding: 50}}>
      <h1>Podcasts</h1>
      <ul>
        {podcasts.map((podcast, index) => (
          <li key={index} style={{marginBottom: 20}}>
            <h2>{podcast.title}</h2>
            <p>{podcast.description}</p>
            <a href={podcast.url} target="_blank" rel="noopener noreferrer">
              Listen
            </a>
          </li>
        ))}
      </ul>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);
        const newPodcast = {
          title: formData.get('title') as string,
          description: formData.get('description') as string,
          url: formData.get('url') as string,
          pubDate: formData.get('pubDate') as string,
        };

        try {
          const response = await fetch('/api/podcasts/add', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPodcast),
          });

          if (response.ok) {
            const data = await response.json();
            setPodcasts(data.podcasts);
            (e.target as HTMLFormElement).reset();
          } else {
            console.error('Failed to add podcast');
          }
        } catch (error) {
          console.error('Error adding podcast:', error);
        }
      }}
    >
      <h2>Add a New Podcast</h2>
      <div>
        <label>
          Title:
          <input type="text" name="title" required />
        </label>
      </div>
      <div>
        <label>
          Description:
          <input type="text" name="description" required />
        </label>
      </div>
      <div>
        <label>
          Publication Date:
          <input type="date" name="pubDate" />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input type="url" name="url" required />
        </label>
      </div>
      <button type="submit">Add Podcast</button>
    </form>
    </div>
  );
};

export default Podcasts;
