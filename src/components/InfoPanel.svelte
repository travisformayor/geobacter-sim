<script lang="ts">
  import Katex from "svelte-katex";

  // Import images
  import marsBanner from "../assets/mars-banner.png";
  import earthBanner from "../assets/earth-banner.png";
  import flowDiagram from "../assets/flow-diagram.png";
</script>

<details class="info-panel">
  <summary>Simulation Overview</summary>
  <div class="info-content">
    <!-- Mars Banner -->
    <figure class="centered-image">
      <img src={marsBanner} alt="Leopard Spots on Martian Rock" />
      <figcaption>
        Fig 1. Mars 'Leopard Spots' in Jezero Crater.
        <br />
        <small>Credit: NASA/JPL-Caltech/MSSS</small>
      </figcaption>
    </figure>

    <!-- Background -->
    <section>
      <h3>Background</h3>
      <p>
        In March of this year NASA announced that the Mars Perseverance rover
        had observed patterns in fossilized mudstone at the Jezero Crater, a
        location once likely filled with liquid water. Dubbed 'leopard spots',
        the patterns contain light interiors and darker rims. The millimeter
        scale spots are rich in iron containing minerals, likely vivianite and
        greigite, and formed by "reaction fronts" of iron reduction spreading
        outward from a center point.
      </p>
      <p>
        The Jezero Crater's low temperature past rules out known non-biological
        causes for these reactions. Bacteria capable of creating similar iron
        reduction patterns do exist on Earth, making the Jezero Crater discovery
        possibly the strongest sign of extraterrestrial life we currently have.
      </p>
    </section>

    <!-- Earth Banner -->
    <figure class="centered-image">
      <img src={earthBanner} alt="Earth reduction patterns collage" />
      <figcaption>
        Fig 2. Geobacter reduction spots.
        <br />
        <small
          >Credits: (a) Fox et al. (2019), (b) Andeskie et al. (2018), (c)
          Spinks et al. (2014), (d) McMahon et al. (2018)</small
        >
      </figcaption>
    </figure>

    <!-- Geobacter Explanation -->
    <section>
      <h3><em>Geobacter metallireducens</em></h3>
      <p>
        <em>Geobacter</em> are a genus of bacteria that can live off the energy
        released by chemical reactions involving inorganic compounds (like those
        found in minerals), a process known as
        <em>chemosynthesis</em>. As <em>Geobacter</em> bacteria deplete local resources
        and propagate outward, they create a chemical reaction front, which over
        time creates a pattern in the inorganic medium. This pattern is not directly
        found in any single bacteria's lifecycle, but instead exists as an emergent
        property from the interaction between the population and the environment.
      </p>
      <p>
        One species, <em>Geobacter metallireducens</em>, has many of the
        characteristics that a hypothetical martian organism would need: it is
        an anaerobic bacteria found in lake mud, it reduces ferric iron (Fe<sup
          >3+</sup
        >) into ferrous iron (Fe<sup>2+</sup>), and it can move towards
        increasing concentrations of Fe<sup>3+</sup>.
      </p>
    </section>

    <!-- Flow Diagram -->
    <figure class="centered-image">
      <img src={flowDiagram} alt="Geobacter flow diagram" />
      <figcaption>
        Fig 3. <em>Geobacter metallireducens</em> flow diagram
        <br />
        <small>
          Rates: r<sub>r</sub>: replication; r<sub>c</sub>: consumption; r<sub
            >w</sub
          >: waste; r<sub>d</sub>: death; r<sub>ad</sub>: active to dormant; r<sub
            >da</sub
          >: dormant to active
          <br />
          Movement: m<sub>f</sub>: water flow (undirected); m<sub>g</sub>:
          nutrient gradient (directed)
        </small>
      </figcaption>
    </figure>

    <!-- Mathematical Model -->
    <section>
      <h3>Mathematical Model</h3>
      <p>
        The simulation creates a system of multi-variable continuous time ODEs
        to track four density fields:
      </p>
      <ul>
        <li>
          <strong>Fe<sup>3+</sup> concentration:</strong> The food resource gradient,
          initially generated with Perlin noise.
        </li>
        <li>
          <strong>Fe<sup>2+</sup> concentration:</strong> The waste byproduct gradient,
          diffused locally as it's generated.
        </li>
        <li>
          <strong>Active Bacteria (A):</strong> The active population consuming
          Fe<sup>3+</sup>, producing Fe<sup>2+</sup>, replicating, moving with a
          biased random walk toward increasing Fe<sup>3+</sup> gradient levels.
        </li>
        <li>
          <strong>Dormant Bacteria (D):</strong> The inactive population, moving
          with an unbiased random walk, that can reactivate when Fe<sup>3+</sup>
          levels improve.
        </li>
      </ul>

      <h4>ODEs</h4>
      <div class="math-block">
        <Katex displayMode>
          {String.raw`\begin{aligned}
\text{Fe}^{3+}\text{ (resource)} \quad
\frac{dF_3}{dt}
&= \underbrace{-\,r_c\,A\,F_3}_{\text{consumption of Fe}^{3+}\text{ by active cells}}
\\[6pt]
\text{Fe}^{2+}\text{ (waste)} \quad
\frac{dF_2}{dt}
&= \underbrace{+\,r_w\,A\,F_3}_{\text{production of Fe}^{2+}\text{ as waste}}
\\[6pt]
\text{Active bacteria} \quad
\frac{dA}{dt}
&= \underbrace{+\;r_r\,A}_{\text{replication}}
\;\underbrace{-\;r_d\,A}_{\text{death}}
\;\underbrace{-\;r_{ad}(F_3)\,A}_{\text{to dormant}}
\;\underbrace{+\;r_{da}(F_3)\,D}_{\text{from dormant}}
\\[6pt]
\text{Dormant bacteria} \quad
\frac{dD}{dt}
&= \underbrace{+\;r_{ad}(F_3)\,A}_{\text{from active}}
\;\underbrace{-\;r_{da}(F_3)\,D}_{\text{to active}}
\;\underbrace{-\;r_d\,D}_{\text{death}}
\end{aligned}`}
        </Katex>
      </div>

      <h4>Stage Transition Rates</h4>
      <p>
        The active-to-dormant and dormant-to-active transition rates depend on
        the resource level
        <Katex>F_3</Katex>.
      </p>

      <h4>Linear Resource Scaling</h4>
      <p>
        Using the resource scale <Katex>K_F > 0</Katex>:
      </p>
      <ul>
        <li><Katex>F_3 = 0</Katex>: no resource available</li>
        <li><Katex>F_3 = K_F</Katex>: max resources</li>
      </ul>

      <h4>
        1. Decreasing function <Katex>{String.raw`f_{\text{dec}}(F_3)`}</Katex>
      </h4>
      <p>Start with the linear form:</p>
      <div class="math-block">
        <Katex displayMode>
          {String.raw`f_{\text{dec}}(F_3) = aF_3 + b`}
        </Katex>
      </div>
      <p><strong>Boundary conditions:</strong></p>
      <ol>
        <li>
          <Katex>{String.raw`f_{\text{dec}}(0) = 1`}</Katex>: no food -&gt; max
          move to dormancy
          <div class="math-block">
            <Katex displayMode>
              {String.raw`\begin{aligned}
a(0) + b &= 1 \\
b &= 1
\end{aligned}`}
            </Katex>
          </div>
        </li>
        <li>
          <Katex>{String.raw`f_{\text{dec}}(K_F) = 0`}</Katex>: max food -&gt;
          no move to dormancy
          <div class="math-block">
            <Katex displayMode>
              {String.raw`\begin{aligned}
aK_F + 1 &= 0 \\
a &= -\frac{1}{K_F}
\end{aligned}`}
            </Katex>
          </div>
        </li>
      </ol>
      <p><strong>Result:</strong></p>
      <div class="math-block">
        <Katex displayMode>
          {String.raw`\boxed{
f_{\text{dec}}(F_3) = 1 - \frac{F_3}{K_F}
}`}
        </Katex>
      </div>

      <h4>
        2. Increasing function <Katex>{String.raw`f_{\text{inc}}(F_3)`}</Katex>
      </h4>
      <p>Start with the linear form:</p>
      <div class="math-block">
        <Katex displayMode>
          {String.raw`f_{\text{inc}}(F_3) = aF_3 + b`}
        </Katex>
      </div>
      <p><strong>Boundary conditions:</strong></p>
      <ol>
        <li>
          <Katex>{String.raw`f_{\text{inc}}(0) = 0`}</Katex>: no food -&gt; no
          move to active
          <div class="math-block">
            <Katex displayMode>
              {String.raw`\begin{aligned}
a(0) + b &= 0 \\
b &= 0
\end{aligned}`}
            </Katex>
          </div>
        </li>
        <li>
          <Katex>{String.raw`f_{\text{inc}}(K_F) = 1`}</Katex>: max food -&gt;
          max move to active
          <div class="math-block">
            <Katex displayMode>
              {String.raw`\begin{aligned}
aK_F + 0 &= 1 \\
a &= \frac{1}{K_F}
\end{aligned}`}
            </Katex>
          </div>
        </li>
      </ol>
      <p><strong>Result:</strong></p>
      <div class="math-block">
        <Katex displayMode>
          {String.raw`\boxed{
f_{\text{inc}}(F_3) = \frac{F_3}{K_F}
}`}
        </Katex>
      </div>

      <h4>3. Scale by maximum rate constants</h4>
      <p>Multiply each linear function by its maximum rate constant:</p>
      <div class="math-block">
        <Katex displayMode>
          {String.raw`\boxed{
\begin{aligned}
r_{ad}(F_3) &= \alpha_{ad}\left(1 - \frac{F_3}{K_F}\right) \\[6pt]
r_{da}(F_3) &= \alpha_{da}\,\frac{F_3}{K_F}
\end{aligned}
}`}
        </Katex>
      </div>
    </section>
  </div>
</details>

<style>
  .info-panel {
    margin-top: 1rem;
    padding: 1rem;
    background: #f5f5f5;
    border-radius: 4px;
    font-size: 1.25rem;
  }

  summary {
    cursor: pointer;
    font-weight: 600;
    padding: 0.5rem;
  }

  summary:hover {
    background: #e8e8e8;
    border-radius: 4px;
  }

  .info-content {
    padding: 0.75rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  section {
    margin: 1.5rem 0;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 0.75rem;
    color: #333;
  }

  h4 {
    margin-top: 1.125rem;
    margin-bottom: 0.5625rem;
    color: #555;
  }

  h5 {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    color: #666;
  }

  p {
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  ul,
  ol {
    line-height: 1.6;
    margin-bottom: 0.75rem;
  }

  .centered-image {
    text-align: center;
    margin: 1.5rem auto;
  }

  .centered-image img {
    display: block;
    margin: 0 auto;
    max-width: 95%;
    height: auto;
    border-radius: 4px;
  }

  .centered-image figcaption {
    color: #555;
    margin-top: 0.375rem;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .math-block {
    background: #fff;
    padding: 0.75rem;
    border-radius: 4px;
    overflow-x: auto;
    margin: 0.75rem 0;
  }
</style>
