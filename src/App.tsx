import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

const routes = [
  { path: "/", component: lazy(() => import("./pages/index")) },
,
  { path: "/booklet", component: lazy(() => import("./pages/booklet")) },
  { path: "/excom", component: lazy(() => import("./pages/excom")) },
  { path: "/ssit", component: lazy(() => import("./pages/ssit")) },
  { path: "/nc", component: lazy(() => import("./pages/nc")) },
  { path: "/cis", component: lazy(() => import("./pages/cis")) },
  { path: "/contact", component: lazy(() => import("./pages/contact")) },
  { path: "/ras", component: lazy(() => import("./pages/ras")) },
  { path: "/2018-njacs", component: lazy(() => import("./pages/2018-njacs")) },
  { path: "/2017-ap-mtt-symposium", component: lazy(() => import("./pages/2017-ap-mtt-symposium")) },
  { path: "/2017-njacs", component: lazy(() => import("./pages/2017-njacs")) },
  { path: "/eca", component: lazy(() => import("./pages/eca")) },
  { path: "/2016-njacs", component: lazy(() => import("./pages/2016-njacs")) },
  { path: "/2016-ap-mtt-symposium", component: lazy(() => import("./pages/2016-ap-mtt-symposium")) },
  { path: "/registration", component: lazy(() => import("./pages/registration")) },
  { path: "/calendar", component: lazy(() => import("./pages/calendar")) },
  { path: "/2015-ap-mtt-symposium", component: lazy(() => import("./pages/2015-ap-mtt-symposium")) },
  { path: "/history", component: lazy(() => import("./pages/history")) },
  { path: "/posters", component: lazy(() => import("./pages/posters")) },
  { path: "/2015-njacs", component: lazy(() => import("./pages/2015-njacs")) },
  { path: "/2015-awards-banquet", component: lazy(() => import("./pages/2015-awards-banquet")) },
  { path: "/emc-pses", component: lazy(() => import("./pages/emc-pses")) },
  { path: "/directions", component: lazy(() => import("./pages/directions")) },
  { path: "/registration", component: lazy(() => import("./pages/registration")) },
  { path: "/2014-ap-mtt-symposium", component: lazy(() => import("./pages/2014-ap-mtt-symposium")) },
  { path: "/tmc", component: lazy(() => import("./pages/tmc")) },
  { path: "/2014-njacs", component: lazy(() => import("./pages/2014-njacs")) },
  { path: "/2014-awards-banquet", component: lazy(() => import("./pages/2014-awards-banquet")) },
  { path: "/it", component: lazy(() => import("./pages/it")) },
  { path: "/awards", component: lazy(() => import("./pages/awards")) },
  { path: "/2013-istep", component: lazy(() => import("./pages/2013-istep")) },
  { path: "/sac", component: lazy(() => import("./pages/sac")) },
  { path: "/2013-ap-mtt-symposium", component: lazy(() => import("./pages/2013-ap-mtt-symposium")) },
  { path: "/registration", component: lazy(() => import("./pages/registration")) },
  { path: "/directions", component: lazy(() => import("./pages/directions")) },
  { path: "/program", component: lazy(() => import("./pages/program")) },
  { path: "/2013-awards-banquet", component: lazy(() => import("./pages/2013-awards-banquet")) },
  { path: "/2013-njacs", component: lazy(() => import("./pages/2013-njacs")) },
  { path: "/awards-banquet-2012", component: lazy(() => import("./pages/awards-banquet-2012")) },
  { path: "/education", component: lazy(() => import("./pages/education")) },
  { path: "/section-information", component: lazy(() => import("./pages/section-information")) },
  { path: "/embs", component: lazy(() => import("./pages/embs")) },
  { path: "/pes", component: lazy(() => import("./pages/pes")) },
  { path: "/smc", component: lazy(() => import("./pages/smc")) },
  { path: "/sp", component: lazy(() => import("./pages/sp")) },
  { path: "/life", component: lazy(() => import("./pages/life")) },
  { path: "/wie", component: lazy(() => import("./pages/wie")) },
  { path: "/consultants-network", component: lazy(() => import("./pages/consultants-network")) },
  { path: "/join", component: lazy(() => import("./pages/join")) },
  { path: "/mailing-list", component: lazy(() => import("./pages/mailing-list")) },
  { path: "/vts", component: lazy(() => import("./pages/vts")) },
  { path: "/pho", component: lazy(() => import("./pages/pho")) },
  { path: "/cs", component: lazy(() => import("./pages/cs")) },
  { path: "/mini-symposium", component: lazy(() => import("./pages/mini-symposium")) },
  { path: "/cas-eds", component: lazy(() => import("./pages/cas-eds")) },
  { path: "/ap-mtt", component: lazy(() => import("./pages/ap-mtt")) },
  { path: "/ias", component: lazy(() => import("./pages/ias")) },
  { path: "/yp", component: lazy(() => import("./pages/yp")) },
  { path: "/im", component: lazy(() => import("./pages/im")) },
  { path: "/c", component: lazy(() => import("./pages/c")) },
  { path: "/committee", component: lazy(() => import("./pages/committee")) },
  { path: "/group", component: lazy(() => import("./pages/group")) },
  { path: "/newsletters", component: lazy(() => import("./pages/newsletters")) },
  { path: "/events", component: lazy(() => import("./pages/events")) },
  { path: "/org", component: lazy(() => import("./pages/org")) },
  { path: "/news", component: lazy(() => import("./pages/news")) },
  { path: "/com", component: lazy(() => import("./pages/com")) },
  { path: "/aes", component: lazy(() => import("./pages/aes")) },
  { path: "/chapter", component: lazy(() => import("./pages/chapter")) },
  { path: "/home", component: lazy(() => import("./pages/home")) }
];

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
          <Routes>
            {routes.map(({ path, component: Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}
