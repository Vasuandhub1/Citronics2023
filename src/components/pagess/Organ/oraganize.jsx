import React from "react";
import "./oraganizer.css";
import chairman from "./img/chairman.jpg";
import director from "./img/Director.jpg";
import principal from "./img/principal.jpg";
import Navigation from "../../Navigation bar/navigation";
import Footers from "../../Footer Bar/Footers";

export default function Oraganize() {
  return (
    <>
    <Navigation></Navigation>
      <div id="container">
        <section class="dark">
          <div class="container py-4">
            <h1 class="h1 text-center" id="pageHeaderTitle">
              ORAGANIZER
            </h1>

            <article class="postcard dark blue">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src={chairman} alt="Image Title" />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title blue">
                  <a href="#"> Shri. Vinod Kumar Agarwal</a>
                </h1>
				<div class="postcard__subtitle small">
					<h3>Chairmen</h3>
				</div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  The Agarwal Group in tune with its policy of excellence
                  blended with ethics is committed to put CDGI on the highest
                  pedestal of academic and technical values. CDGI is focused on
                  producing Engineering and Management professionals who can
                  compete in the global arena. At the same time there is no
                  compromise regarding cultural, ethical and moral values to be
                  infused into the young sprouting minds, so that they would be
                  transformed into valuable assets of the society and the nation
                  at large. Today CDGI is known for its highest standards of
                  discipline and academic excellence. CDGI will continue to be a
                  cherished destination for students with a passion for
                  pragmatic technical skills.
                </div>
              </div>
            </article>
            <article class="postcard dark red">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src={director} alt="Image Title" />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title red">
                  <a href="#">Dr Joy Banerjee </a>
                </h1>
              </div>
			  <div class="postcard__subtitle small">
					<h3>Director</h3>
				</div>
              <div class="postcard__bar"></div>
              <div class="postcard__preview-txt">
                Experienced IIT Kharagpur Engineering Alumnus and Professor with
                a rich background in academia, corporate, and administrative
                roles. Arthur D. Little, Boston alumnus with teaching
                experience. Notable roles include Senior Consultant at The World
                Bank, Director at top technical institutes, and contributions to
                national and international conferences. PhD project sponsored by
                SAIL and Defense with industrial relevance. Played a key role in
                launching TEQIP Scheme and Washington Accord in India. Extensive
                visits to universities and companies worldwide, including
                Microsoft, Amazon, Boeing, and more, to enhance Indian exports.
                Visiting Professor at NIT Durgapur and consultant to high-grade
                alloy and stainless steel industries globally. Prior service
                with major manufacturing companies like Larsen and Toubro,
                Svenska Flakt, Greaves Foseco, and SAIL.
              </div>
            </article>
            <article class="postcard dark green">
              <a class="postcard__img_link" href="#">
                <img class="postcard__img" src={principal} alt="Image Title" />
              </a>
              <div class="postcard__text">
                <h1 class="postcard__title green">
                  <a href="#"> Dr Manish Kumar Srivastava</a>
                </h1>
				<div class="postcard__subtitle small">
					<h3>PRINCIPAL</h3>
				</div>
               
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
				Dr. Manish, with 28 years of diverse experience in academia,
                administration, and software industries, is a recognized expert
                in IPR, Data Science, IoT, and AI. He holds a Ph.D. in
                "Reconfiguration of Networks" and is associated with esteemed
                professional societies. His administrative roles include Head of
                Institution, Director (R&D), and Dean (R&D). A recipient of the
                Cognizant Best Faculty Award, Dr. Manish has guided scholars to
                Ph.D. success and contributed to accreditation processes. His
                prolific research includes 100+ articles in top-tier journals,
                and he's authored books on IPR, Cloud Computing, and more. With
                design patents, published patents, and copyrights, he continues
                to make impactful contributions as a Reviewer and Coordinator
                for AICTE and RGPV funded projects. Currently, he is preparing
                to release a book on "Innovative Engineering with AI
                Application" with John Wiley & Sons.</div>
                <ul class="postcard__tagbox">
                  <li class="tag__item">
                    <i class="fas fa-tag mr-2"></i>Podcast
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>
      </div>
      <Footers></Footers>
    </>
  );
}


