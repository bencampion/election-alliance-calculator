export default function About() {
  return (
    <main className="content m-5">
      <p className="subtitle">
        The United Kingdom&apos;s 650{" "}
        <a href="https://en.wikipedia.org/wiki/Member_of_Parliament_(United_Kingdom)">
          Members of Parliament
        </a>{" "}
        (MPs) are elected using the{" "}
        <a href="https://en.wikipedia.org/wiki/First-past-the-post_voting">
          first-past-the-post voting system
        </a>{" "}
        in single member constituencies. Some MPs get less than 50 percent of
        the vote and may not have won if losing candidates did not{" "}
        <a href="https://en.wikipedia.org/wiki/Spoiler_effect">
          split the vote
        </a>
        . These alliance calculators show how the results may have changed in
        general elections if parties had formed alliances to combine their votes
        behind a single candidate in each constituency.
      </p>
      <p>
        The calculators use a crude model that assumes if multiple parties were
        to form an alliance and field a single candidate in each constituency,
        then this candidate would get the combined vote of the all the
        candidates it replaced. In practice it is unlikely that all votes would
        transfer to the alliance candidate so this simple model probably only
        provides an upper limit of what change in results might be expected from
        an alliance.
      </p>
    </main>
  );
}
