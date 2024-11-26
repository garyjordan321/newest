// in Permutive.js

//Permutive with consent start
(function (e, o, n, i) {
  if (!e) {
    (e = e || {}), (window.permutive = e), (e.q = []);
    var t = function () {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(
        /[018]/g,
        function (e) {
          return (
            e ^
            ((window.crypto || window.msCrypto).getRandomValues(
              new Uint8Array(1)
            )[0] &
              (15 >> (e / 4)))
          ).toString(16);
        }
      );
    };
    (e.config = i || {}),
      (e.config.apiKey = o),
      (e.config.workspaceId = n),
      (e.config.environment = e.config.environment || "production"),
      (window.crypto || window.msCrypto) && (e.config.viewId = t());
    for (
      var g = [
          "addon",
          "identify",
          "track",
          "trigger",
          "query",
          "segment",
          "segments",
          "ready",
          "on",
          "once",
          "user",
          "consent",
        ],
        r = 0;
      r < g.length;
      r++
    ) {
      var w = g[r];
      e[w] = (function (o) {
        return function () {
          var n = Array.prototype.slice.call(arguments, 0);
          e.q.push({ functionName: o, arguments: n });
        };
      })(w);
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var checkExist = setInterval(function () {
      var onetrustBtn = document.querySelector('#onetrust-accept-btn-handler');
      var recommendedBtn = document.querySelector('#accept-recommended-btn-handler');
      var savePreferenceBtn = document.querySelector('.save-preference-btn-handler');

      var handleConsent = function() {
        window.permutive.consent({
          opt_in: true,
          token: "CONSENT_CAPTURED"
        });
      };

      if (onetrustBtn || recommendedBtn || savePreferenceBtn) {
        clearInterval(checkExist);

        if (onetrustBtn) onetrustBtn.addEventListener('click', handleConsent);
        if (recommendedBtn) recommendedBtn.addEventListener('click', handleConsent);
        if (savePreferenceBtn) savePreferenceBtn.addEventListener('click', handleConsent);
      }
    }, 100); 
  });

})(window.permutive, `${crbTracker.permutive.publicAPIKey}`, `${crbTracker.permutive.workspaceID}`, {"consentRequired": true});
//Permutive with consent end

(window.googletag = window.googletag || {}),
  (window.googletag.cmd = window.googletag.cmd || []),
  window.googletag.cmd.push(function () {
    if (0 === window.googletag.pubads().getTargeting("permutive").length) {
      var e = window.localStorage.getItem("_pdfps");
      window.googletag
        .pubads()
        .setTargeting("permutive", e ? JSON.parse(e) : []);
      var o = window.localStorage.getItem("permutive-id");
      o &&
        (window.googletag.pubads().setTargeting("puid", o),
        window.googletag.pubads().setTargeting("ptime", Date.now().toString())),
        window.permutive.config.viewId &&
          window.googletag
            .pubads()
            .setTargeting("prmtvvid", window.permutive.config.viewId),
        window.permutive.config.workspaceId &&
          window.googletag
            .pubads()
            .setTargeting("prmtvwid", window.permutive.config.workspaceId);
    }
  });

{
  let data = {
    page: {
      article: {
        id: `${crbTracker.permutive.postID}`,

        title: `${crbTracker.permutive.postTitle}`,
      },
    },
  };

  if (
    "undefined" != typeof crbTracker.permutive.pageViewEvent &&
    crbTracker.permutive.pageViewEvent
  ) {
    data.page = { ...data.page, ...crbTracker.permutive.pageViewEvent };
  }

  if ("undefined" != typeof localStorage["clusterData"]) {
    let  clusterData='';
    if(localStorage["clusterData"]!="undefined"){
        clusterData = JSON.parse(localStorage["clusterData"]);
    }
    for (el of ["PID", "cluster", "cluster_predicted"]) {
      delete clusterData[el];
    }

    data.page = { ...data.page, ...clusterData };
  }

  if (typeof localStorage["cluster"] != "undefined") {
    data.page["cluster"] = {
      cluster: Number(localStorage["cluster"]),

      domain: localStorage["domain"],
    };
  }

  permutive.addon("web", data);
}

// Anywhere in your code (could be outside permutive.js) this is now your own Clearbit code:

//TODO: Please update this script with any changes required

window._pCbCallback = function (response) {
  if (response) {
    var industry_var = '';
    if(response.company){
      industry_var = response.company.category.industry;
    }
    window.permutive.track("Clearbit", {
      type: response.type,

      ip: response.ip,

      geoIP: {
        city: response.geoIP.city,

        country: response.geoIP.country,

        countryCode: response.geoIP.countryCode,

        state: response.geoIP.state,

        stateCode: response.geoIP.stateCode,
      },

      fuzzy: response.fuzzy,

      domain: response.domain,

      company: {
        category: {
          industry: industry_var,

          industryGroup: response.company.category.industryGroup,

          naicsCode: response.company.category.naicsCode,

          sector: response.company.category.sector,

          sicCode: response.company.category.sicCode,

          subIndustry: response.company.category.subIndustry,
        },

        crunchbase: {
          handle: response.company.crunchbase.handle,
        },

        description: response.company.description,

        domain: response.company.domain,

        domainAliases: response.company.domainAliases,

        emailProvider: response.company.emailProvider,

        facebook: {
          handle: response.company.facebook.handle,

          likes: response.company.facebook.likes,
        },

        foundedYear: response.company.foundedYear,

        geo: {
          city: response.company.geo.city,

          country: response.company.geo.country,

          countryCode: response.company.geo.countryCode,

          lat: response.company.geo.lat,

          lng: response.company.geo.lng,

          postalCode: response.company.geo.postalCode,

          state: response.company.geo.state,

          stateCode: response.company.geo.stateCode,

          streetAddress: response.company.geo.streetAddress,

          streetName: response.company.geo.streetName,

          streetNumber: response.company.geo.streetNumber,

          subPremise: response.company.geo.subPremise,
        },

        id: response.company.id,

        identifiers: {
          usEIN: response.company.identifiers.usEIN,
        },

        indexedAt: response.company.indexedAt,

        legalName: response.company.legalName,

        linkedin: {
          handle: response.company.linkedin.handle,
        },

        location: response.company.location,

        logo: response.company.logo,

        metrics: {
          alexaGlobalRank: response.company.metrics.alexaGlobalRank,

          alexaUsRank: response.company.metrics.alexaUsRank,

          annualRevenue: response.company.metrics.annualRevenue,

          employees: response.company.metrics.employees,

          employeesRange: response.company.metrics.employeesRange,

          estimatedAnnualRevenue:
            response.company.metrics.estimatedAnnualRevenue,

          fiscalYearEnd: response.company.metrics.fiscalYearEnd,

          googleRank: response.company.metrics.googleRank,

          marketCap: response.company.metrics.marketCap,

          raised: response.company.metrics.raised,
        },

        name: response.company.name,

        parent: {
          domain: response.company.parent.domain,
        },

        phone: response.company.phone,

        site: {
          emailAddresses: response.company.site.emailAddresses,

          h1: response.company.site.h1,

          metaAuthor: response.company.site.metaAuthor,

          metaDescription: response.company.site.metaDescription,

          phoneNumbers: response.company.site.phoneNumbers,

          title: response.company.site.title,

          url: response.company.site.url,
        },

        tags: response.company.tags,

        tech: response.company.tech,

        techCategories: response.company.techCategories,

        ticker: response.company.ticker,

        timeZone: response.company.timeZone,

        twitter: {
          avatar: response.company.twitter.avatar,

          bio: response.company.twitter.bio,

          followers: response.company.twitter.followers,

          following: response.company.twitter.following,

          handle: response.company.twitter.handle,

          id: response.company.twitter.id,

          location: response.company.twitter.location,

          site: response.company.twitter.site,
        },

        type: response.company.type,

        ultimateParent: {
          domain: response.company.ultimateParent.domain,
        },

        url: response.company.url,

        utcOffset: response.company.utcOffset,
      },

      confidence_score: response.confidence_score,
    });

    if (window.popupCallback) {
      window.popupCallback(response);
    }
  }
};

var sitelist = [
  // TODO: Please update this list with you needs

  "capitalmonitor.ai",

  "uat.capitalmonitor.ai",

  "citymonitor.ai",

  "uat.citymonitor.ai",

  "elitetraveler.com",

  "newstatesman.com",

  "pressgazette.co.uk",

  "spearswms.com",

  "techmonitor.ai",

  "uat.techmonitor.ai",

  "test-newstatesman-multisite.pantheonsite.io",

  "tech.newstatesman.com",

  "worldoffinewine.com",

  "www.spears500.com",

  "sotn.newstatesman.com",

  "test-figaro-b2c-multisite-1.pantheonsite.io",

  "leadmonitor.ai",
  
  "financedirectoreurope.com"
];

const appendClearbitTag = function () {
  const cbs = document.createElement("script");

  cbs.setAttribute(
    "src",

    "https://reveal.clearbit.com/v1/companies/reveal?authorization=pk_bcf6023ac7569a6d92f7af8c606484a1&callback=_pCbCallback&variable=_cbResponse"
  );

  document.body.appendChild(cbs);
};

const CLEARBIT_TIMESTAMP_KEY = "prmt_cb_ts";

const timeNow = new Date().getTime(); // date/time in milliseconds

const clearbitLastUpdated = JSON.parse(
  localStorage.getItem(CLEARBIT_TIMESTAMP_KEY)
);

if (
  (!clearbitLastUpdated || timeNow - clearbitLastUpdated > 1) &&
  navigator &&
  navigator.userAgent.toLowerCase().indexOf("googlebot") == -1 &&
  sitelist.indexOf(window.location.hostname.replace("www.", "")) != -1
) {
  appendClearbitTag(CLEARBIT_TIMESTAMP_KEY, timeNow);
}

