import { formatDate, formatDateDifference } from 'utils';

const WorkPlace = ({
  company,
  position,
  location,
  summary,
  highlights,
  startDate,
  endDate,
  tools,
}) => {
  return (
    <div className="work-item">
      <div className="work-item__head">
        <div>
          <h3 className="work-item__title">
            <span className="work-item__title-position">{position}</span>
            <span className="work-item__title-company"> - {company}</span>
          </h3>
          <div className="work-item__dates">
            <p className="work-item__dates-time">
              {formatDateDifference(startDate, endDate)}
            </p>
            <p className="work-item__dates-range">
              ( {formatDate(startDate)} - {formatDate(endDate)} )
            </p>
          </div>
        </div>
        <div>
          <div className="work-item__location">
            <p>{location}</p>
          </div>
        </div>
      </div>
      <div className="work-item__content">
        <p className="work-item__content-summary">{summary}</p>
        <div>
          <ul className="work-item__content-highlights">
            {highlights.map(h => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
      {tools && (
        <div className="work-item__tools">
          <p>Tools:</p>
          <div className="work-item__tools-container">
            {tools.map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      )}
      <style jsx>
        {`
          .work-item {
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 1.5rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
          }
          .work-item * {
            margin: 0;
          }
          .work-item .work-item__head {
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          @media screen and (max-width: 600px) {
            .work-item .work-item__head {
              flex-direction: column;
              align-items: start;
            }
          }
          .work-item .work-item__title {
            font-size: 1.1rem;
          }
          .work-item .work-item__title-company {
            font-size: 0.9rem;
            font-weight: 500;
          }
          .work-item .work-item__title-position {
            color: var(--primary-color);
          }
          .work-item .work-item__dates {
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
          }
          .work-item .work-item__dates .work-item__dates-time {
            font-weight: 700;
            margin-bottom: 0.3rem;
          }
          .work-item .work-item__dates .work-item__dates-range {
            font-size: 0.8rem;
          }
          .work-item .work-item__location {
            font-size: 0.7rem;
          }
          .work-item .work-item__content {
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }
          .work-item .work-item__content .work-item__content-summary {
            margin-bottom: 1rem;
          }
          .work-item .work-item__content .work-item__content-highlights {
            margin: 0;
            padding-left: 1rem;
          }
          .work-item .work-item__content .work-item__content-highlights li {
            margin-bottom: 0.3rem;
          }
          .work-item .work-item__tools > p {
            font-weight: 600;
            font-size: 0.9rem;
            margin-bottom: 0.2rem;
          }
          .work-item .work-item__tools-container {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
          }
          .work-item .work-item__tools-container span {
            background-color: rgba(0, 0, 0, 0.03);
            font-size: 0.7rem;
            border-radius: 0.3rem;
            padding: 0.2rem 0.4rem;
            border: 1px solid rgba(0, 0, 0, 0.1);
          }
        `}
      </style>
    </div>
  );
};

export default WorkPlace;
