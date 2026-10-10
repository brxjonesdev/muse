type ScoreMatchParams = {
  query: string;
  candidate: string;
};

function normalize(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .replace(/&/g, " and ")
    .replace(/\s+/g, " ")
    .replace(/^the\s+/, "")
    .trim();
}

function isSubsequence(query: string, candidate: string): boolean {
  let queryIndex = 0;

  for (const char of candidate) {
    if (char === query[queryIndex]) {
      queryIndex++;
    }

    if (queryIndex === query.length) {
      return true;
    }
  }

  return false;
}

function levenshteinDistance(a: string, b: string): number {
  const previous = Array.from(
    { length: b.length + 1 },
    (_, index) => index
  );

  for (let i = 1; i <= a.length; i++) {
    const current = [i];

    for (let j = 1; j <= b.length; j++) {
      const insertion = current[j - 1] + 1;
      const deletion = previous[j] + 1;
      const substitution =
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1);

      current.push(
        Math.min(insertion, deletion, substitution)
      );
    }

    previous.splice(0, previous.length, ...current);
  }

  return previous[b.length];
}

export default function scoreMatch({
  query,
  candidate,
}: ScoreMatchParams): number {
  const normalizedQuery = normalize(query);
  const normalizedCandidate = normalize(candidate);

  if (!normalizedQuery || !normalizedCandidate) {
    return 0;
  }

  // Exact match: 100
  if (normalizedQuery === normalizedCandidate) {
    return 100;
  }

  // Candidate begins with query: 80
  if (normalizedCandidate.startsWith(normalizedQuery)) {
    return 80;
  }

  const candidateWords = normalizedCandidate.split(" ");
  const queryWords = normalizedQuery.split(" ");

  // Any candidate word begins with the query: 60
  if (
    candidateWords.some((word) =>
      word.startsWith(normalizedQuery)
    )
  ) {
    return 60;
  }

  // Every query word matches somewhere, in any order: 30
  if (
    queryWords.length > 1 &&
    queryWords.every((queryWord) =>
      candidateWords.some((candidateWord) =>
        candidateWord.includes(queryWord)
      )
    )
  ) {
    return 30;
  }

  // Query appears contiguously inside candidate: 40
  if (normalizedCandidate.includes(normalizedQuery)) {
    return 40;
  }

  // Fuzzy matching: 10–20
  if (
    normalizedQuery.length >= 3 &&
    isSubsequence(normalizedQuery, normalizedCandidate)
  ) {
    return 15;
  }

  // Close typo match: 10–20
  const distance = levenshteinDistance(
    normalizedQuery,
    normalizedCandidate
  );

  const maxLength = Math.max(
    normalizedQuery.length,
    normalizedCandidate.length
  );

  const similarity = 1 - distance / maxLength;

  if (similarity >= 0.8) {
    return Math.round(10 + similarity * 10);
  }

  return 0;
}