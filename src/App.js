import logo from './logo.svg';
// import './App.css';
import { Gitgraph } from "@gitgraph/react";

function App() {
  return (
    <div className="App">
        <Gitgraph>{(gitgraph) => {
          /*  // const master = gitgraph.branch("master");
            const master = gitgraph.branch({
                "name": "master"
            });
            master.commit("Init the project");

            master.commit("Add README")
                .commit("Add tests")
                .commit("Implement feature");
            // // master.tag("v1.0");
            //
            const newFeature = gitgraph.branch("new-feature");
            newFeature.commit("Implement an awesome feature");
            master.commit("Hotfix a bug");
            // newFeature.commit("Fix tests");
            // // Merge `newFeature` into `master`
            // master.merge(newFeature, "Release new version");*/



            let aa = [
                {
                    "gmtModified": "2020-11-09 11:13:30",
                    "code": "xs_ver-master",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "updater": "250909",
                    "branchStart": true,
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "creator": "250909",
                    "published": false,
                    "gmtCreate": "2020-11-09 11:13:30",
                    "sync": "0",
                    "version": "master",
                    "_id": "5fa8b3da42d44c313de6fcb2",
                    "time": "1eb22398-b01e-0763-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 11:14:13",
                    "code": "xs_ver-0.0.1",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "master"
                    ],
                    "parentVersionId": [
                        "5fa8b3da42d44c313de6fcb2"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 11:14:13",
                    "sync": "0",
                    "version": "0.0.1",
                    "_id": "5fa8b40542d44c313de6fcb8",
                    "time": "1eb2239a-483e-0714-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 11:14:20",
                    "code": "xs_ver-0.0.2",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.1"
                    ],
                    "parentVersionId": [
                        "5fa8b40542d44c313de6fcb8"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 11:14:20",
                    "sync": "0",
                    "version": "0.0.2",
                    "_id": "5fa8b40c42d44c313de6fcb9",
                    "time": "1eb2239a-8a35-0a65-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 11:15:57",
                    "code": "xs_ver-sand_dev",
                    "appCode": "xs_ver",
                    "branch": "sand_dev",
                    "sourceVersionId": "5fa8b40c42d44c313de6fcb9",
                    "updater": "250909",
                    "branchStart": true,
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "creator": "250909",
                    "sourceVersion": "0.0.2",
                    "published": false,
                    "gmtCreate": "2020-11-09 11:15:57",
                    "version": "sand_dev",
                    "_id": "5fa8b46d42d44c313de6fcba"
                },
                {
                    "gmtModified": "2020-11-09 11:30:16",
                    "code": "xs_ver-create_dev",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "create_dev",
                    "sourceVersionId": "5fa8b40c42d44c313de6fcb9",
                    "updater": "250909",
                    "branchStart": true,
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "creator": "250909",
                    "sourceVersion": "0.0.2",
                    "published": false,
                    "gmtCreate": "2020-11-09 11:30:16",
                    "version": "create_dev",
                    "_id": "5fa8b7c842d44c313de6fd13"
                },
                {
                    "gmtModified": "2020-11-09 11:37:23",
                    "code": "xs_ver-0.0.3",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "sand_dev",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "sand_dev"
                    ],
                    "parentVersionId": [
                        "5fa8b46d42d44c313de6fcba"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 11:37:23",
                    "sync": "0",
                    "version": "0.0.3",
                    "_id": "5fa8b97342d44c313de6fd2d",
                    "time": "1eb223ce-1095-07d6-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:26:28",
                    "code": "xs_ver-0.0.4",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.2"
                    ],
                    "parentVersionId": [
                        "5fa8b40c42d44c313de6fcb9"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 14:26:28",
                    "sync": "0",
                    "version": "0.0.4",
                    "_id": "5fa8e11442d44c313de6fd62",
                    "time": "1eb22548-0052-0507-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:26:47",
                    "code": "xs_ver-0.0.5",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "sand_dev",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.3"
                    ],
                    "parentVersionId": [
                        "5fa8b97342d44c313de6fd2d"
                    ],
                    "creator": "250909",
                    "published": false,
                    "gmtCreate": "2020-11-09 14:26:47",
                    "sync": "0",
                    "version": "0.0.5",
                    "_id": "5fa8e12742d44c313de6fd63",
                    "time": "1eb22548-b50f-0d88-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:26:57",
                    "code": "xs_ver-0.0.6",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.4"
                    ],
                    "parentVersionId": [
                        "5fa8e11442d44c313de6fd62"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 14:26:57",
                    "sync": "0",
                    "version": "0.0.6",
                    "_id": "5fa8e13142d44c313de6fd64",
                    "time": "1eb22549-15cf-0e99-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:27:09",
                    "code": "xs_ver-0.0.7",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "create_dev",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "create_dev"
                    ],
                    "parentVersionId": [
                        "5fa8b7c842d44c313de6fd13"
                    ],
                    "creator": "250909",
                    "published": false,
                    "gmtCreate": "2020-11-09 14:27:09",
                    "sync": "0",
                    "version": "0.0.7",
                    "_id": "5fa8e13d42d44c313de6fd65",
                    "time": "1eb22549-8a68-08ba-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:27:13",
                    "code": "xs_ver-0.0.8",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "create_dev",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.7"
                    ],
                    "parentVersionId": [
                        "5fa8e13d42d44c313de6fd65"
                    ],
                    "creator": "250909",
                    "published": false,
                    "gmtCreate": "2020-11-09 14:27:13",
                    "sync": "0",
                    "version": "0.0.8",
                    "_id": "5fa8e14142d44c313de6fd66",
                    "time": "1eb22549-af5f-06fb-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:27:27",
                    "code": "xs_ver-0.0.9",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.6"
                    ],
                    "parentVersionId": [
                        "5fa8e13142d44c313de6fd64"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 14:27:27",
                    "sync": "0",
                    "version": "0.0.9",
                    "_id": "5fa8e14f42d44c313de6fd67",
                    "time": "1eb2254a-34aa-0f8c-90ae-a483e76a5b69"
                },
                {
                    "gmtModified": "2020-11-09 14:27:35",
                    "code": "xs_ver-0.0.10",
                    "sign": "a5976243-8708-48ee-bb53-7f1333cc5650",
                    "appCode": "xs_ver",
                    "branch": "master",
                    "pkgId": "5fa8b3da42d44c313de6fcb0",
                    "parentVersion": [
                        "0.0.9"
                    ],
                    "parentVersionId": [
                        "5fa8e14f42d44c313de6fd67"
                    ],
                    "creator": "250909",
                    "published": true,
                    "gmtCreate": "2020-11-09 14:27:35",
                    "sync": "0",
                    "version": "0.0.10",
                    "_id": "5fa8e15742d44c313de6fd68",
                    "time": "1eb2254a-8242-040d-90ae-a483e76a5b69"
                }
            ]
            let branches = {};
            branches.master = gitgraph.branch({
                "name": "master"
            });
            for (let ele of aa) {
                if (ele.branchStart === true) {
                    branches[ele.branch] = gitgraph.branch({
                        "name": ele.branch
                    })
                    continue;
                }
                branches[ele.branch].commit(ele.version)
                console.log(ele.branch)
            }
            console.log(branches)

        }}</Gitgraph>
    </div>
  );
}

export default App;
