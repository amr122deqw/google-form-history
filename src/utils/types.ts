// FB_PUBLIC_LOAD_DATA_ のデータ構造
export type GoogleFormData = any[]; // トップレベルの配列は非常に複雑なため、any[]のままにする

export interface GoogleFormPayload extends GoogleFormData {
  1: [any, GoogleFormItemData[]];
  // フォームのタイトル
  3: string;
  // フォームのパス
  14: string;
}

export type GoogleFormItemData = [
  string, // id
  string, // 見出し
  string, // ラベル
  any,
  GoogleFormQuestionDetail[]
];

export type GoogleFormQuestionDetail = [
  number, // answerId
  string[][] // 選択肢（例：[['選択肢1'], ['選択肢2']]）
];

// formId をキーにしたフォームデータ
export type LocalForms = Record<string, Form>;

export interface Form {
  title: string;
  path: string;
  items: Item[];
}

export interface Item {
  id: string;
  headline: string;
  label: string;
  questions: Question[];
}

export interface Question {
  answerId: number;
  options: string[];
}

// $formId-$fbzx をキーにした回答データ
export type LocalAnswers = Record<string, FormAnswers>;

export interface FormAnswers {
  formId: string;
  fbzx: string;
  date: string;
  answers: Answers;
}

// answerId をキーにした回答データ
export type Answers = Record<string, Answer>;

export type Answer =
  | {
      type: "text";
      value: string[];
    }
  | {
      type: "date";
      year: number;
      month: number;
      day: number;
    }
  | {
      type: "time";
      hour: number;
      minute: number;
    };
