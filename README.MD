# Problem Statement

We've all fallen down the Reddit rabbit hole, haven't we? So, the designers have just shared the latest designs (attached on the next page), and you are tasked to build this page version using React/Vue (preferably), or any framework of your choice. Would you be able to do that?

   ### You have to make a static page for all the design elements and make it look as close to the design as possible. Pixel Perfect is best.

   ### Links and buttons on the designs are not supposed to work unless asked for specifically below.

   ### You need to make the popular section dynamic using the Reddit open APIs

        https://www.reddit.com/dev/api

        https://www.reddit.com/r/{subreddit}/{sort}/.json?limit={limit}

   ### Sort options like hot, new, controversial etc, should make use of the API.

    A subreddit is a Reddit community for a specific topic, named as r/topic For example - r/technology

   ### limit- limits the number of posts

   ### Other sections, like the favorites, reddit feeds, etc, are not required to be made dynamic and can be hard coded.

    Making the search work with the API will be a bonus :)

        https://www.reddit.com/search.json?q={query}

    Additional Considerations

        Pagination: You may make use of after and before parameters to navigate through result sets. (optional)

        Rate Limiting: Be mindful of Reddit's API rate limits to avoid being throttled.