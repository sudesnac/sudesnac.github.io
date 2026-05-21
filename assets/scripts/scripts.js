var lang = localStorage.getItem("lang");
var pathname = window.location.pathname.replace(".html", "");

$(document).ready(function () {
	// ---------- Language Handler
	if (!lang) {
		localStorage.setItem("lang", "en");
		lang = "en";
	}

	// NOTE:
	// Your code uses "fa" as the non-English language key.
	// You are currently using it for Japanese. That's fine—just keep it consistent
	// in lang/en.js and lang/fa.js.
	if (lang === "fa") {
		const cw = document.getElementById("content_wrapper");
		if (cw) cw.classList.add("ltl_wrapper");

		if (document.getElementById("languageIcon") && document.getElementById("languageText")) {
			document.getElementById("languageIcon").src = "../assets/images/icons/en.png";
			document.getElementById("languageText").innerText = "EN";
		}
	} else {
		const cw = document.getElementById("content_wrapper");
		if (cw) cw.classList.add("rtr_wrapper");

		if (document.getElementById("languageIcon") && document.getElementById("languageText")) {
			document.getElementById("languageIcon").src = "../assets/images/icons/jp.png";
			document.getElementById("languageText").innerText = "日本語";
		}
	}

	// Home page data
	const home_data = {
		image: globalData.image,
		links: [
			{
				name: `mailto:${globalData.email}`,
				active: globalData.email ? true : false,
				img: "../assets/images/icons/mail.png",
			},
			{
				name: globalData.googleScholar,
				active: globalData.googleScholar ? true : false,
				img: "../assets/images/icons/google-scholar.png",
			},
			{
				name: globalData.whatsapp,
				active: globalData.whatsapp ? true : false,
				img: "../assets/images/icons/rg.png",
			},
			{
				name: globalData.twitter,
				active: globalData.twitter ? true : false,
				img: "../assets/images/icons/bluesky.png",
			},
			{
				name: globalData.linkedin,
				active: globalData.linkedin ? true : false,
				img: "../assets/images/icons/linkedin.png",
			},
			{
				name: globalData.github,
				active: globalData.github ? true : false,
				url: "/",
				img: "../assets/images/icons/github.png",
			},
			{
				name: globalData.rm,
				active: globalData.rm ? true : false,
				img: "../assets/images/icons/rm.png",
			},
		],
	};

	function homeData() {
		document.getElementById("page_title").innerText =
			lang === "en" ? enHomePageData.name : faHomePageData.name;

		document.getElementById("home_image").src = home_data.image ? home_data.image : "";
		document.getElementById("home_name").innerText =
			lang === "en" ? enHomePageData.name : faHomePageData.name;
		document.getElementById("home_job_title").innerText =
			lang === "en" ? enHomePageData.jobTitle : faHomePageData.jobTitle;

		document.getElementById("home_links").innerHTML = home_data.links
			.filter((item) => item.active)
			.map(
				(link) => `
					<a href="${link.name}" target="_blank" rel="noopener noreferrer">
						<img src="${link.img}" alt="" style="width:24px; height:24px; margin-right:10px;">
					</a>
				`,
			)
			.join("");

		document.getElementById("home_title").innerText =
			lang === "en" ? enHomePageData.home_title : faHomePageData.home_title;

		// home_content is already HTML-ish template text
		document.getElementById("home_content").innerHTML =
			lang === "en" ? enHomePageData.home_content : faHomePageData.home_content;
	}

	if (pathname === "/" || pathname === "/index") {
		homeData();
	}

	// ============================
	// Publications page data (FIXED)
	// ============================
	function highlightName(html) {
		// bold your name in rendered HTML
		return html
			.replaceAll(
				"Chakraborty, S.",
				`<span class="fw-bold">Chakraborty, S.</span>`,
			)
			.replaceAll(
				"Chakraborty, Sudesna",
				`<span class="fw-bold">Chakraborty, Sudesna</span>`,
			);
	}

	function formatCitation(html) {
		// Markdown italics: *...*  ->  HTML italics: <em>...</em>
		return html.replace(/\*(.+?)\*/g, "<em>$1</em>");
	}

	function linkifyUrls(html) {
  return html.replace(
    /\bhttps?:\/\/[^\s<]+/g,
    (url) => {
      // Show short link text for your thesis page
      if (url.startsWith("https://uwo.scholaris.ca/items/")) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">View</a>`;
      }

      // (optional) also shorten UWO IR thesis links
      if (url.startsWith("https://ir.lib.uwo.ca/etd/")) {
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">View</a>`;
      }

      // default: show the URL as text
      return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    }
  );
}

	function renderCitations(sectionId, items, numbered = true) {
		const container = document.getElementById(sectionId);
		if (!container) return;

		const listTag = numbered ? "ol" : "ul";
		const listClass = numbered ? "ps-3" : "ps-3 list-unstyled";

		container.innerHTML = `
			<${listTag} class="${listClass}">
				${items
					.map(
						(item) =>
							`<li class="mb-2">${highlightName(
								linkifyUrls(formatCitation(item.citation)),
							)}</li>`,
					)
					.join("")}
			</${listTag}>
		`;
	}

	function publicationsData() {
		document.getElementById("page_title").innerText =
			lang === "en" ? "Publications" : "業績";

		const data = lang === "en" ? enPublicationsPageData : faPublicationsPageData;
    const sideTitle = document.getElementById("side_nav_title");
      if (sideTitle) {sideTitle.innerText = lang === "en" ? "Publications" : "業績";}

    // Left sidebar labels (match language file titles)
    const side1 = document.getElementById("side_journal");
      if (side1) side1.innerText = data.type_one_title;

    const side2 = document.getElementById("side_conf_papers");
      if (side2) side2.innerText = data.type_two_title;

    const side3 = document.getElementById("side_conf_pres");
      if (side3) side3.innerText = data.type_three_title;

    const side4 = document.getElementById("side_thesis");
      if (side4) side4.innerText = data.type_four_title;

		// Section titles + anchors
		const t1 = document.getElementById("publications_type_one_title");
		if (t1) {
			t1.innerText = data.type_one_title;
			t1.id = "journal-papers";
		}
		renderCitations("publications_type_one_data", data.type_one_items, true);

		const t2 = document.getElementById("publications_type_two_title");
		if (t2) {
			t2.innerText = data.type_two_title;
			t2.id = "conference-papers";
		}
		renderCitations("publications_type_two_data", data.type_two_items, true);

		const t3 = document.getElementById("publications_type_three_title");
		if (t3) {
			t3.innerText = data.type_three_title;
			t3.id = "conference-presentations";
		}
		renderCitations("publications_type_three_data", data.type_three_items, true);

		const t4 = document.getElementById("publications_type_four_title");
		if (t4) {
			t4.innerText = data.type_four_title;
			t4.id = "phd-thesis";
		}
		// thesis: unnumbered
		renderCitations("publications_type_four_data", data.type_four_items, false);

		const t5 = document.getElementById("publications_type_five_title");
		if (t5) t5.innerText = data.type_five_title;
		renderCitations("publications_type_five_data", data.type_five_items, true);
	}

	if (pathname === "/publications") {
		publicationsData();
	}

	// Research page data
	function researchData() {
		document.getElementById("page_title").innerText =
			lang === "en" ? "Research" : "研究";

		document.getElementById("research_title").innerHTML =
			lang === "en" ? enResearchPageData.title : faResearchPageData.title;

		document.getElementById("research_data").innerHTML =
			lang === "en" ? enResearchPageData.content : faResearchPageData.content;
	}

	if (pathname === "/research") {
		researchData();
	}

	// Jobs page data
  function jobsData() {
    // Title at top (browser content area)
    document.getElementById("page_title").innerText =
      lang === "en" ? "CV" : "経歴";

    const jobsDataObj = lang === "en" ? enJobsPageData : faJobsPageData;

    // Page heading inside content
    document.getElementById("jobs_title").innerText = jobsDataObj.title;

    // Localize left sidebar labels (only if the ids exist in jobs.html)
    const sideTitle = document.getElementById("cv_side_nav_title");
    if (sideTitle) sideTitle.innerText = lang === "en" ? "CV" : "経歴";

    const setSide = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.innerText = text;
    };

    setSide("cv_nav_education", lang === "en" ? "Education" : "学歴");
    setSide("cv_nav_recognitions", lang === "en" ? "Recognitions" : "受賞");
    setSide("cv_nav_grants", lang === "en" ? "Grants" : "研究費");
    setSide("cv_nav_work", lang === "en" ? "Work experience" : "職歴");

    setSide("cv_nav_work_academic", lang === "en" ? "Academic" : "学術");
    setSide("cv_nav_work_teaching", lang === "en" ? "Teaching" : "教育");
    setSide("cv_nav_work_nonacademic", lang === "en" ? "Non-academic" : "企業・非学術");
    setSide("cv_nav_work_other", lang === "en" ? "Other" : "その他");

    // Helpers
    function renderEducation(education) {
      return education
        .map(
          (edu) => `
            <div class="cv_item">
              <div class="cv_item_header">
                <div class="cv_item_title">${edu.degree}</div>
                <div class="cv_item_meta">${edu.duration ?? ""}</div>
              </div>
              <div class="cv_item_subtitle">${edu.institution ?? ""}</div>
              ${edu.thesisTitle ? `<div class="cv_item_text"><span class="fw-bold">${lang === "fa" ? "博士論文タイトル：" : "Thesis:"}</span> ${edu.thesisTitle}</div>` : ""}
			  ${edu.supervisors ? `<div class="cv_item_text"><span class="fw-bold">${lang === "fa" ? "指導教官：" : "Supervisors:"}</span> ${edu.supervisors.join(", ")}</div>` : ""}
			  ${edu.link ? `<div class="cv_item_text"><a class="cv_link" href="${edu.link}" target="_blank" rel="noopener noreferrer">${lang === "fa" ? "博士論文" : "View"}</a></div>` : ""}
            </div>
          `,
        )
        .join("");
    }

    function renderRecognitions(recognitions) {
      return recognitions
        .map(
          (rec) => `
            <div class="cv_item">
              <div class="cv_item_header">
                <div class="cv_item_title">${rec.title ?? ""}</div>
              </div>
              <div class="cv_item_text">${rec.description ?? ""}</div>
            </div>
          `,
        )
        .join("");
    }

    function renderGrants(grants) {
      return grants
        .map(
          (grant) => `
            <div class="cv_item">
              <div class="cv_item_header">
                <div class="cv_item_title">${grant.title ?? ""}</div>
                <div class="cv_item_meta">${grant.duration ?? ""}</div>
              </div>
              <div class="cv_item_text">${grant.description ?? ""}</div>
              ${grant.link ? `<div class="cv_item_text"><a class="cv_link" href="${grant.link}" target="_blank" rel="noopener noreferrer">View</a></div>` : ""}
            </div>
          `,
        )
        .join("");
    }

    function renderWorkExperience(items) {
      return items
        .map(
          (job) => `
            <div class="cv_item">
              <div class="cv_item_header">
                <div class="cv_item_title">${job.title ?? ""}</div>
                <div class="cv_item_meta">
                  ${job.startData ?? ""}${job.startData ? " – " : ""}${
                    job.endDate ? job.endDate : lang === "en" ? "Now" : "現在"
                  }
                </div>
              </div>
              <div class="cv_item_subtitle">
                ${job.company ?? ""}${job.location ? `, ${job.location}` : ""}
              </div>
              ${job.abstract ? `<div class="cv_item_text">${job.abstract}</div>` : ""}
              ${
                job.achievements && job.achievements.length > 0
                  ? `<ul class="cv_item_list">${job.achievements
                      .map((a) => `<li>${a}</li>`)
                      .join("")}</ul>`
                  : ""
              }
            </div>
          `,
        )
        .join("");
    }

    // Grouping (Option A: relies on job.category)
    const workItems = Array.isArray(jobsDataObj.items) ? jobsDataObj.items : [];

    const byCat = (cat) => workItems.filter((j) => (j.category ?? "") === cat);

    const academic = byCat("Academic");
    const teaching = byCat("Teaching");
    const nonAcademic = byCat("Non-academic");
    const other = byCat("Other");

    // Render
    document.getElementById("jobs_data").innerHTML = `
      <section class="cv_section" id="cv-education">
        <h3 class="cv_heading">${lang === "en" ? "🎓 Education" : "🎓 学歴"}</h3>
        ${renderEducation(jobsDataObj.education || [])}
      </section>

      <section class="cv_section" id="cv-recognitions">
        <h3 class="cv_heading">${lang === "en" ? "🏅 Recognitions" : "🏅 受賞"}</h3>
        ${renderRecognitions(jobsDataObj.recognitions || [])}
      </section>

      <section class="cv_section" id="cv-grants">
        <h3 class="cv_heading">${lang === "en" ? "💰 Grants" : "💰 研究費"}</h3>
        ${renderGrants(jobsDataObj.grants || [])}
      </section>

      <section class="cv_section" id="cv-work">
        <h3 class="cv_heading">${lang === "en" ? "💼 Work experience" : "💼 職歴"}</h3>

        <div class="cv_subsection" id="cv-work-academic">
          <h4 class="cv_subheading">${lang === "en" ? "Academic" : "学術"}</h4>
          ${renderWorkExperience(academic)}
        </div>

        <div class="cv_subsection" id="cv-work-teaching">
          <h4 class="cv_subheading">${lang === "en" ? "Teaching" : "教育"}</h4>
          ${renderWorkExperience(teaching)}
        </div>

        <div class="cv_subsection" id="cv-work-nonacademic">
          <h4 class="cv_subheading">${lang === "en" ? "Non-academic" : "企業・非学術"}</h4>
          ${renderWorkExperience(nonAcademic)}
        </div>

        <div class="cv_subsection" id="cv-work-other">
          <h4 class="cv_subheading">${lang === "en" ? "Other" : "その他"}</h4>
          ${renderWorkExperience(other)}
        </div>
      </section>
    `;
  }

  if (pathname === "/jobs") {
    jobsData();
  }

	// Contact page data
	const contact_data = {
		contact_title: lang === "en" ? "Contact" : "問合せ",
		contact_items: [
			{
				img: "../assets/images/icons/location.png",
				title: lang === "en" ? globalData.enAddress : globalData.faAddress,
				active: globalData.enAddress || globalData.faAddress ? true : false,
			},
			{
				img: "../assets/images/icons/phone.png",
				title: globalData.phone,
				active: globalData.phone ? true : false,
			},
			{
				img: "../assets/images/icons/mail.png",
				title: globalData.email,
				active: globalData.email ? true : false,
			},
			{
				img: "../assets/images/icons/bluesky.png",
				url: globalData.twitter,
				name: globalData.twitterTitle,
				active: globalData.twitter ? true : false,
			},
			{
				img: "../assets/images/icons/rg.png",
				url: globalData.whatsapp,
				name: globalData.whatsappTitle,
				active: globalData.whatsapp ? true : false,
			},
			{
				img: "../assets/images/icons/google-scholar.png",
				url: globalData.googleScholar,
				name: globalData.googleScholarTitle,
				active: globalData.googleScholar ? true : false,
			},
			{
				img: "../assets/images/icons/orcid.png",
				url: globalData.orcid,
				name: globalData.orcidTitle,
				active: globalData.orcid ? true : false,
			},
			{
				img: "../assets/images/icons/github.png",
				url: globalData.github,
				name: globalData.githubTitle,
				active: globalData.github ? true : false,
			},
			{
				img: "../assets/images/icons/linkedin.png",
				url: globalData.linkedin,
				name: globalData.linkedinTitle,
				active: globalData.linkedin ? true : false,
			},
			{
				img: "../assets/images/icons/rm.png",
				url: globalData.rm,
				name: globalData.rmTitle,
				active: globalData.rm ? true : false,
			},
		],
	};

	function contactData() {
		document.getElementById("page_title").innerHTML = contact_data.contact_title;
		document.getElementById("contact_title").innerHTML = contact_data.contact_title;

		document.getElementById("contact_data").innerHTML = contact_data.contact_items
			.filter((item) => item.active)
			.map(
				(link) => `
					<div class="d-flex align-items-center mb-2">
						<img src="${link.img}" alt="" style="width:22px; height:22px; margin-right:10px;">
						${
							link.url
								? `<a href="${link.url}" target="_blank" rel="noopener noreferrer">${
										link.name ? link.name : link.url
									}</a>`
								: `<span>${link.title}</span>`
						}
					</div>
				`,
			)
			.join("");
	}

	if (pathname === "/contact") {
		contactData();
	}
});