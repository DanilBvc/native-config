interface SubSection {
  title: string;
}

interface Section {
  subTitle?: string;
  text?: string;
  subSections?: SubSection[];
  tText?: string[];
  dTexts?: string[];
}

export interface AgreementItem {
  title: string;
  sections: Section[];
}
